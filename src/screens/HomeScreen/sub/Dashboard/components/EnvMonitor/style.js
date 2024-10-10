import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 250,
    alignSelf: 'center',
    width: '90%',
    gap: 10,
  },
  itemPannel: {
    backgroundColor: colors.surface.primary,
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
})
