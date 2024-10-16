import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  pannel: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#4c7380',
    borderRadius: 10,
    gap: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  input: {
    backgroundColor: 'white',
  },
  ipInput: {
    flex: 3,
  },
  portInput: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 10,
    padding: 5,
  },
  buttonCancel: {
    borderWidth: 2,
    color: 'black',
  },
})

export const textStyles = StyleSheet.create({
  pannelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 16,
  },
})
