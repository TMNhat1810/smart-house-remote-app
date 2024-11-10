import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export default function PaginationNumber({ num, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.numberButton, { borderColor: 'black' }]}
      onPress={() => onPress(num)}
    >
      <Text style={{ fontSize: 17 }}>{num}</Text>
    </TouchableOpacity>
  )
}
