import React from 'react'
import { Text, View } from 'react-native'
import { ScreenContainer } from '../../components/common'
import { styles, textStyles } from './style'
import NetInput from './NetInput/NetInput'

export default function NetworkSetting() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={[textStyles.title]}>Thông tin IP thiết bị</Text>
        <NetInput />
      </View>
    </ScreenContainer>
  )
}
