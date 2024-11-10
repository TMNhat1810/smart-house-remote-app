import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5,
    paddingTop: 15,
    paddingBottom: 10,
    gap: 10,
  },
  numberButton: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTop: {
    position: 'absolute',
    top: -35,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
  },
  numberScroll: {
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  numberSrcollContainer: {
    width: '100%',
  },
})
