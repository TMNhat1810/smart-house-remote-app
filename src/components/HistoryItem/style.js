import { StyleSheet } from 'react-native'
import { colors } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.dark,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const textStyles = StyleSheet.create({
  text: { color: colors.gray1 },
  icon: { color: colors.gray0 },
})
