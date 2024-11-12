import React from 'react'
import { ScrollView, View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { styles } from './style'
import EnvMonitor from './components/EnvMonitor'
import LightSwitch from './components/LightSwitch/LightSwitch'
import DoorController from './components/DoorController'

export default function Dashboard() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <EnvMonitor />
        <View style={styles.scrollContainer}>
          <ScrollView
            style={styles.scrollInnerContainer}
            contentContainerStyle={styles.scrollContentContainer}
          >
            <LightSwitch />
            <DoorController />
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  )
}
