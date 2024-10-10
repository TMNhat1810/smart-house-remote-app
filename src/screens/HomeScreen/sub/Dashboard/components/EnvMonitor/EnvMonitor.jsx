import { FontAwesome5 } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
import { socket } from '../../../../../../utils'

export default function EnvMonitor() {
  const [data, setData] = useState({ humidity: 0, temperature: 0 })

  useEffect(() => {
    socket.on('hs-data', (data) => {})

    return () => {
      socket.removeListener('hs-data')
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.itemPannel}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginRight: 10,
              color: '#e61e1e',
            }}
          >
            Nhiệt độ
          </Text>
          <FontAwesome5 name="temperature-high" size={30} color="#e61e1e" />
        </View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            marginRight: 10,
            color: '#e61e1e',
          }}
        >
          {data.temperature} °C
        </Text>
      </View>
      <View style={styles.itemPannel}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <FontAwesome5 name="snowflake" size={30} color="#1a8bdb" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#1a8bdb',
            }}
          >
            Độ ẩm
          </Text>
        </View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#1a8bdb',
          }}
        >
          {data.humidity}
        </Text>
      </View>
    </View>
  )
}
