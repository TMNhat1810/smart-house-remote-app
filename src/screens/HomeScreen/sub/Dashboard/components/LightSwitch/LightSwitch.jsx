import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles, textStyles } from './style'
import SwitchItem from './SwitchItem'
import { EventHandler } from '../../../../../../utils'
import { lightServices } from '../../../../../../services'

export default function LightSwitch() {
  const [lights, setLights] = useState([
    {
      name: 'lightLivingRoom',
      room: 'Phòng khách',
      on: false,
    },
    {
      name: 'lightKitchen',
      room: 'Bếp',
      on: false,
    },
    {
      name: 'lightBed',
      room: 'Ngủ',
      on: false,
    },
  ])

  useEffect(() => {
    EventHandler.set('light', (data) => {
      const updatedLights = lights.map((light) => {
        return { ...light, on: data[light.name] }
      })
      setLights(updatedLights)
    })
    return () => {
      EventHandler.delete('light')
    }
  }, [])

  return (
    <View style={styles.cover}>
      <View style={styles.container}>
        <Text style={textStyles.title}>Đèn phòng</Text>
        <View style={styles.lightPannelContainer}>
          {lights.map((item) => (
            <SwitchItem
              key={item.name}
              item={item}
              callback={async () => {
                const data = lights.reduce((acc, light) => {
                  acc[light.name] = light.on
                  return acc
                }, {})
                await lightServices.update({
                  ...data,
                  [item.name]: !data[item.name],
                })
              }}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
