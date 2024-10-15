import React from 'react'
import { View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { styles } from './style'
import EnvMonitor from './components/EnvMonitor'
import LightSwitch from './components/LightSwitch/LightSwitch'

export default function Dashboard() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <EnvMonitor />
        <LightSwitch />
      </View>
    </ScreenContainer>
  )
}
