import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScreenContainer } from '../../../../components/common'
import { styles, textStyles } from './style'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
  const navigation = useNavigation()

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={[textStyles.title]}>Cài đặt</Text>
        <View style={styles.pannel}>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Network-setting')}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <View
                  style={{ backgroundColor: 'white', padding: 5, borderRadius: 100 }}
                >
                  <Icon source="wifi" size={25} />
                </View>
                <Text style={[textStyles.itemTitle]}>Mạng</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon source="chevron-right" size={30} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenContainer>
  )
}
