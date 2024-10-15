import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles, textStyles } from './style'
import { Switch } from 'react-native-switch'
import { Icon, TouchableRipple } from 'react-native-paper'

export default function SwitchItem({ item }) {
  const [lightOn, setLightOn] = useState(false)

  return (
    <TouchableRipple
      style={[styles.lightPannel, { borderColor: lightOn ? '#71a279' : '#9a7265' }]}
      onPress={() => setLightOn(!lightOn)}
    >
      <View style={styles.itemContainer}>
        <View style={styles.left}>
          <View style={{ backgroundColor: 'white', borderRadius: 100, padding: 10 }}>
            <Icon
              source={lightOn ? 'lightbulb-on' : 'lightbulb-outline'}
              color={lightOn ? '#febb50' : 'black'}
              size={40}
            />
          </View>
          <Text style={[textStyles.itemTitle]}>{item.room}</Text>
        </View>
        <View>
          <Text
            style={[
              { position: 'absolute', zIndex: 100, top: 5 },
              lightOn
                ? { left: 10, color: '#71a279' }
                : { right: 5, color: '#9a7265' },
            ]}
          >
            {lightOn ? 'ON' : 'OFF'}
          </Text>
          <Switch
            value={lightOn}
            onValueChange={(value) => setLightOn(value)}
            activeText=""
            inActiveText=""
            backgroundActive="#e0ebe2"
            circleBorderActiveColor="#71a279"
            backgroundInactive="#e7ddda"
            circleBorderInactiveColor="#9a7265"
            circleBorderWidth={3}
            containerStyle={{
              borderWidth: 2,
              borderColor: lightOn ? '#71a279' : '#9a7265',
            }}
          />
        </View>
      </View>
    </TouchableRipple>
  )
}
