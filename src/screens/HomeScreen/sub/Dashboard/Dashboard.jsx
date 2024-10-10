import React from 'react'
import { Text, View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { styles, textStyles } from './style'
import EnvMonitor from './components/EnvMonitor'
import LightSwitch from './components/LightSwitch'

export default function Dashboard() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={textStyles.title}>Thông số môi trường phòng</Text>
        <EnvMonitor />
        <LightSwitch />
      </View>
    </ScreenContainer>
  )
}
