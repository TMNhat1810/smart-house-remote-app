import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles, textStyles } from './style'
import SwitchItem from './SwitchItem'

export default function LightSwitch() {
  const [lights] = useState([
    {
      room: 'Phòng khách',
      on: false,
    },
    {
      room: 'Bếp',
      on: false,
    },
    {
      room: 'Hiên',
      on: false,
    },
  ])

  return (
    <View style={styles.cover}>
      <View style={styles.container}>
        <Text style={textStyles.title}>Đèn phòng</Text>
        <View style={styles.lightPannelContainer}>
          {lights.map((item) => (
            <SwitchItem key={item.room} item={item} />
          ))}
        </View>
      </View>
    </View>
  )
}
