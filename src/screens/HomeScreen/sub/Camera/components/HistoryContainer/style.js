import { StyleSheet } from 'react-native'
import { deviceConfig } from '../../../../../../configs'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    paddingBottom: 50,
  },
  itemContainer: { flex: 1, gap: 10 },
  scrollInnerContainer: { height: deviceConfig.height - 300 },
  scrollContentContainer: { flex: 1, paddingBottom: 45 },
})
