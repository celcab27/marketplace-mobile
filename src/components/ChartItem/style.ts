import {StyleSheet} from 'react-native';
import {GRAY, PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from '../../theme/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: GRAY,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    height: 100,
  },
  image: {
    borderRadius: 16,
    height: 70,
    width: 70,
    backgroundColor: WHITE,
    marginRight: 16,
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontFamily: '"Roboto", sans-serif',
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
