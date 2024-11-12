import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button, Icon } from 'react-native-paper'
import { styles } from './style'
import { doorServices } from '../../../../../../services'

export default function DoorController() {
  const [doorState, setDoorState] = useState(false)

  const handleDoorOpen = async () => {
    const response = await doorServices.open()
    if (response) setDoorState(true)
  }

  const handleDoorClose = async () => {
    const response = await doorServices.close()
    if (response) setDoorState(false)
  }

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        buttonColor="#4c7380"
        style={styles.button}
        onPress={handleDoorOpen}
        labelStyle={{
          height: '100%',
          textAlignVertical: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mở cửa</Text>
      </Button>
      <Button
        mode="contained"
        buttonColor="#4c7380"
        style={styles.button}
        onPress={handleDoorClose}
        labelStyle={{
          height: '100%',
          textAlignVertical: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Đóng cửa</Text>
      </Button>
      <View style={styles.iconContainer}>
        <Icon
          source={doorState ? 'door-open' : 'door-closed'}
          size={50}
          color="#4c7380"
        />
      </View>
    </View>
  )
}
