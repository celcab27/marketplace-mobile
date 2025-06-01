import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../theme/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    height: '100%',
    width: '100%',
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
  },
  selectsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
