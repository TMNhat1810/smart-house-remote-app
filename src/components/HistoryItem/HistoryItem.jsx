import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { styles, textStyles } from './style'

export default function HistoryItem() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[textStyles.text]}>10:00 AM</Text>
        <Text style={[textStyles.text]}>Phát hiện người</Text>
      </View>
      <View>
        <FontAwesome5
          name="chevron-circle-right"
          color={textStyles.icon.color}
          size={40}
        />
      </View>
    </View>
  )
}
