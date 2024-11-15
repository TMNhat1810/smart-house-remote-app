import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../themes'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
    flexWrap: 'wrap',
    borderBottomLeftRadius: 50,
    backgroundColor: colors.darkGreen,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  monitor: {
    backgroundColor: colors.backgroundCyan,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 20,
    marginBottom: 5,
  },
  topMonitor: { alignSelf: 'center' },
  mainMonitor: {
    width: '100%',
    borderTopWidth: 1,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemPannel: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e3ecef',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  itemTop: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  sunnyIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10,
  },
})

export const textStyles = StyleSheet.create({
  welcome: {
    color: colors.backgroundWhite,
    fontSize: 30,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {},
})
