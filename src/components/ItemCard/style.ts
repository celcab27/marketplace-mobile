import {StyleSheet} from 'react-native';
import {GRAY, PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from '../../theme/colors';

export default StyleSheet.create({
  container: {
    margin: 5,
    width: 160,
    borderRadius: 24,
    backgroundColor: GRAY,
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    padding: 8,
  },
  image: {
    borderRadius: 24,
    height: 144,
    backgroundColor: WHITE,
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontFamily: '"Roboto", sans-serif',
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
  },
});
