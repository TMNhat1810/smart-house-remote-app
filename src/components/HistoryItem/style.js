import { StyleSheet } from 'react-native'
import { deviceConfig } from '../../configs'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8e4e8',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
  },
  modalContainer: { backgroundColor: 'white' },
  modalImage: { width: deviceConfig.width, height: deviceConfig.width },
})

export const textStyles = StyleSheet.create({
  text: {},
  icon: {},
})
