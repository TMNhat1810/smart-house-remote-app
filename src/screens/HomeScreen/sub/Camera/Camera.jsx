import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { deviceConfig } from '../../../../configs'
import { styles } from './style'
import HistoryItem from '../../../../components/HistoryItem'
import { colors } from '../../../../themes'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Camera() {
  return (
    <ScreenContainer>
      <View>
        <Image
          src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/10/toi-nam-nay-hon-70-tuoi-1.jpg"
          style={{ width: deviceConfig.width, height: 300 }}
        />
      </View>
      <View style={styles.historyContainer}>
        <View>
          <Text
            style={{
              fontSize: 30,
              color: colors.gray0,
              fontWeight: 'bold',
            }}
          >
            Lịch sử
          </Text>
        </View>
        <View style={styles.historyItemContainer}>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: colors.darkblue }}>
            Xem thêm <FontAwesome5 name="angle-double-down" />
          </Text>
        </View>
      </View>
    </ScreenContainer>
  )
}
