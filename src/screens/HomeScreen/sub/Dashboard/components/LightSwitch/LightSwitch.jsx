import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { styles } from './style'
import { assets } from '../../../../../../assets'
import Toggle from 'rn-toggle'

export default function LightSwitch() {
  const [lightOn, setLightOn] = useState(false)

  return (
    <View style={styles.container}>
      <Image source={assets.lightBulbIcon} style={styles.lightBulbIcon} />
      <View>
        <Toggle
          isActive={lightOn}
          vertical={true}
          toggle={() => setLightOn((value) => !value)}
          text={lightOn ? 'ON' : 'OFF'}
          textStyle={{}}
          // activeColor="#000000"
          // inactiveColor="#FFFFFF"
          // borderColor="#FF0000"
          // cursorColor="#FF0000"
        />
      </View>
    </View>
  )
}
