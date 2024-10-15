import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles, textStyles } from './style'
import { socket } from '../../../../../../utils'
import { Icon, Surface } from 'react-native-paper'

export default function EnvMonitor() {
  const [data, setData] = useState({ temperature: 30, humidity: 88, gas: 100 })

  useEffect(() => {
    // socket.onmessage = (event) => {
    //   const data = JSON.parse(event.data)
    //   if (data.temperature && data.humidity)
    //     setData({ temperature: data.temperature, humidity: data.humidity, gas: 0 })
    // }
    // return () => {
    //   socket.onmessage = null
    // }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View>
          <Text style={[textStyles.welcome]}>Hế lô,</Text>
          <Text>Bottom text</Text>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 100, padding: 5 }}>
          <Icon source="bell" size={35} />
        </View>
      </View>
      <View style={styles.monitor}>
        <View style={styles.topMonitor}>
          <Text style={{ fontSize: 16, fontWeight: 200 }}>
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>
        <View style={styles.mainMonitor}>
          <View style={styles.itemPannel}>
            <View style={styles.itemTop}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 100, padding: 2 }}
              >
                <Icon source="water" size={30} color="#6cabce" />
              </View>
              <Text style={[textStyles.data]}>{data.humidity}%</Text>
            </View>
            <View>
              <Text style={[textStyles.title]}>Độ ẩm</Text>
            </View>
          </View>
          <View style={styles.itemPannel}>
            <View style={styles.itemTop}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 100, padding: 2 }}
              >
                <Icon source="thermometer-lines" size={30} color="#851310" />
              </View>
              <Text style={[textStyles.data]}>{data.temperature}&deg;C</Text>
            </View>
            <View>
              <Text style={[textStyles.title]}>Nhiệt độ</Text>
            </View>
          </View>
          <View style={styles.itemPannel}>
            <View style={styles.itemTop}>
              <View
                style={{ backgroundColor: 'white', borderRadius: 100, padding: 2 }}
              >
                <Icon source="molecule-co2" size={30} color="#5390e3" />
              </View>
              <Text style={[textStyles.data]}>{data.gas}</Text>
            </View>
            <View>
              <Text style={[textStyles.title]}>Khí gas</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sunnyIcon}>
        <Icon source="white-balance-sunny" color="#ffac33" size={50} />
      </View>
    </View>
  )
}
