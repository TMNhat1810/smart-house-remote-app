import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './style'
import HistoryItem from '../../../../../../components/HistoryItem'
import { ServerAxios } from '../../../../../../configs/axios/server'
import PaginationBar from '../../../../../../components/common/PaginationBar'

export default function HistoryContainer() {
  const [page, setPage] = useState(1)
  const [logs, setLogs] = useState({ totalPages: 1, content: [] })

  useEffect(() => {
    const reloadPage = async () => {
      const data = await ServerAxios.get('/image/list', {
        params: { page, limit: 3 },
      })
      setLogs(data)
    }
    reloadPage()
  }, [page])

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {logs.content.map((log) => (
          <HistoryItem key={log.id} item={log} />
        ))}
      </View>
      <PaginationBar
        page={page}
        maxPage={logs.totalPages}
        onPageChange={(page) => setPage(page)}
      />
    </View>
  )
}
