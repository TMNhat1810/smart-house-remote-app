import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { styles } from './style'
import { AppContext } from '../../../../contexts'
import WebView from 'react-native-webview'
import HistoryContainer from './components/HistoryContainer'
import { IconButton, TouchableRipple } from 'react-native-paper'

export default function Camera() {
  const { camURL } = useContext(AppContext)
  const [uri, setUri] = useState(camURL + '/stream')
  const [hasError, setError] = useState(false)

  const handleReload = () => {
    setUri('')
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      setUri(camURL + '/stream')
    }, 100)
  }

  return (
    <ScreenContainer>
      <View style={styles.streamView}>
        {hasError ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Could not connect to the website.</Text>
          </View>
        ) : (
          <WebView source={{ uri: uri }} onError={() => setError(true)} />
        )}
        <TouchableRipple onPress={handleReload} style={styles.wvReloadButton}>
          <IconButton icon="reload" iconColor="#4c7380" size={40} />
        </TouchableRipple>
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
