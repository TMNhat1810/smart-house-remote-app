import React from 'react'
import { Text, View } from 'react-native'
import { styles, textStyles } from './style'
import { Switch } from 'react-native-switch'
import { Icon, TouchableRipple } from 'react-native-paper'

export default function SwitchItem({ item, callback }) {
  const { on } = item

  return (
    <TouchableRipple
      style={[styles.lightPannel, { borderColor: on ? '#71a279' : '#9a7265' }]}
      onPress={callback}
    >
      <View style={styles.itemContainer}>
        <View style={styles.left}>
          <View style={{ backgroundColor: 'white', borderRadius: 100, padding: 10 }}>
            <Icon
              source={on ? 'lightbulb-on' : 'lightbulb-outline'}
              color={on ? '#febb50' : 'black'}
              size={40}
            />
          </View>
          <Text style={[textStyles.itemTitle]}>{item.room}</Text>
        </View>
        <View>
          <Text
            style={[
              { position: 'absolute', zIndex: 100, top: 5 },
              on ? { left: 10, color: '#71a279' } : { right: 5, color: '#9a7265' },
            ]}
          >
            {on ? 'ON' : 'OFF'}
          </Text>
          <Switch
            value={on}
            onValueChange={callback}
            activeText=""
            inActiveText=""
            backgroundActive="#e0ebe2"
            circleBorderActiveColor="#71a279"
            backgroundInactive="#e7ddda"
            circleBorderInactiveColor="#9a7265"
            circleBorderWidth={3}
            containerStyle={{
              borderWidth: 2,
              borderColor: on ? '#71a279' : '#9a7265',
            }}
          />
        </View>
      </View>
    </TouchableRipple>
  )
}
