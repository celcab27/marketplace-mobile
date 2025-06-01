import {StyleSheet} from 'react-native';
import {GRAY, PRIMARY_COLOR, WHITE} from '../../theme/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    marginRight: 16,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: GRAY,
    padding: 12,
    borderRadius: 8,
  },
  selectText: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000088',
  },
  modalContent: {
    marginHorizontal: 30,
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
  },
  optionText: {
    fontSize: 16,
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontSize: 14,
    marginBottom: 4,
  },
});
