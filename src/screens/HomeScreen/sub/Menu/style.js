import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  pannel: {
    borderColor: '#4c7380',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  itemContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  item: {
    backgroundColor: '#d8e4e8',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
})

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
