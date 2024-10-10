import React from 'react'
import { View } from 'react-native'
import { styles } from './style'

export default function ScreenContainer({ children }) {
  return <View style={styles.container}>{children}</View>
}
