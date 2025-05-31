import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  selectText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000088',
  },
  modalContent: {
    marginHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: '#114232',
    fontSize: 14,
    marginBottom: 4,
  },
});
