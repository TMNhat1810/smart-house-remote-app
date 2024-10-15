import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground } from 'react-native'
import { styles } from './style'
import Navigator from '../navigations/navigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../themes'

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={styles.background}>
        <StatusBar animated style="light" backgroundColor={colors.darkGreen} />
        <Navigator />
      </ImageBackground>
    </SafeAreaView>
  )
}
