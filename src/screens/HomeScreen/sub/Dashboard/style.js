import { StyleSheet } from 'react-native'
import { colors } from '../../../../themes'
import { deviceConfig } from '../../../../configs'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  swiper: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {},
  scrollInnerContainer: { height: deviceConfig.height - 250 },
  scrollContentContainer: {},
})

export const textStyles = StyleSheet.create({
  title: { fontSize: 20, color: colors.gray1, fontWeight: 'bold' },
})
