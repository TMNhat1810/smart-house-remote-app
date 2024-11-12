import { StyleSheet } from 'react-native'
import { deviceConfig } from '../../../../configs'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0)',
  },
  streamView: {
    width: deviceConfig.width,
    height: 300,
  },
  errorContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  wvReloadButton: {
    position: 'absolute',
    zIndex: 100,
    right: 5,
    top: 5,
  },
  historyContainer: {
    flex: 1,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    gap: 10,
  },
})
