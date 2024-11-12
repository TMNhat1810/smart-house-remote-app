import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { styles } from './style'
import HistoryItem from '../../../../../../components/HistoryItem'
import { ServerAxios } from '../../../../../../configs/axios/server'
import PaginationBar from '../../../../../../components/common/PaginationBar'

export default function HistoryContainer() {
  const [page, setPage] = useState(1)
  const [logs, setLogs] = useState({ totalPages: 1, content: [] })
  const [refreshing, setRefreshing] = useState(false)

  const reloadPage = async () => {
    const data = await ServerAxios.get('/image/list', {
      params: { page, limit: 3 },
    })
    setLogs(data)
    setRefreshing(false)
  }

  useEffect(() => {
    reloadPage()
  }, [page])

  return (
    <ScrollView
      style={styles.scrollInnerContainer}
      contentContainerStyle={styles.scrollContentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={reloadPage} />
      }
    >
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
    </ScrollView>
  )
}
