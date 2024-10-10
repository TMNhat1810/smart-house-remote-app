import { StyleSheet } from 'react-native'
import { colors } from '../../../../themes'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
    gap: 10,
  },
})

export const textStyles = StyleSheet.create({
  title: { fontSize: 20, color: colors.gray1, fontWeight: 'bold' },
})
