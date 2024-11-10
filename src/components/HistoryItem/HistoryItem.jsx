import React, { useContext, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { styles, textStyles } from './style'
import { Modal, Portal, TouchableRipple } from 'react-native-paper'
import { AppContext } from '../../contexts'

export default function HistoryItem({ item }) {
  const { receivedTime, title, urlImage } = item

  const [modalOpen, setModelOpen] = useState(false)
  const { serverURL } = useContext(AppContext)

  const showModal = () => setModelOpen(true)
  const hideModal = () => setModelOpen(false)

  return (
    <TouchableRipple onPress={showModal}>
      <View style={styles.container}>
        <View>
          <Text style={[textStyles.text]}>{receivedTime}</Text>
          <Text style={[textStyles.text]}>{title}</Text>
        </View>
        <View>
          <FontAwesome5
            name="chevron-circle-right"
            color={textStyles.icon.color}
            size={40}
          />
        </View>
        <Portal>
          <Modal
            visible={modalOpen}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
          >
            <Image
              src={serverURL + '/image/viewImage/' + urlImage}
              style={styles.modalImage}
            />
          </Modal>
        </Portal>
      </View>
    </TouchableRipple>
  )
}
