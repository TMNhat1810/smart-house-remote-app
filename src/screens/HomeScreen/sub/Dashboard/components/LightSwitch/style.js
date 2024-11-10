import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../themes'

export const styles = StyleSheet.create({
  cover: {
    backgroundColor: colors.darkGreen,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    paddingTop: 30,
    backgroundColor: colors.backgroundWhite,
    borderTopRightRadius: 40,
  },
  lightBulbIcon: { width: 80, height: 80 },
  lightPannelContainer: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  lightPannel: {
    width: '100%',
    backgroundColor: '#d8e4e8',
    padding: 15,
    borderRadius: 20,
    minWidth: 150,
    borderColor: colors.gray3,
    borderWidth: 2,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
})

export const textStyles = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 25 },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})
