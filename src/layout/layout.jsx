import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground } from 'react-native'
import { styles } from './style'
import { assets } from '../assets'
import Navigator from '../navigations/navigator'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={assets.background} style={styles.background}>
        <StatusBar animated style="light" backgroundColor="black" />
        <Navigator />
      </ImageBackground>
    </SafeAreaView>
  )
}
