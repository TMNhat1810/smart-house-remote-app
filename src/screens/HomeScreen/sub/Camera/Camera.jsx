import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { styles } from './style'
import { colors } from '../../../../themes'
import { FontAwesome5 } from '@expo/vector-icons'
import { AppContext } from '../../../../contexts'
import WebView from 'react-native-webview'
import HistoryContainer from './components/HistoryContainer'

export default function Camera() {
  const { camURL } = useContext(AppContext)

  return (
    <ScreenContainer>
      <View style={styles.streamView}>
        <WebView source={{ uri: camURL + '/stream' }} />
      </View>
      <View style={styles.historyContainer}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Lịch sử
          </Text>
        </View>
        <HistoryContainer />
      </View>
    </ScreenContainer>
  )
}
