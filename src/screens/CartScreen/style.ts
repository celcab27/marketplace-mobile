import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, WHITE} from '../../theme/colors';

export default StyleSheet.create({
  container: {backgroundColor: WHITE, height: '100%'},
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
  },
});
