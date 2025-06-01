import {Dimensions, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from '../../theme/colors';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth * 0.9;

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  image: {
    width: '90%',
    height: imageSize,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 24,
  },
  descriptionContainer: {display: 'flex', alignItems: 'flex-start'},
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  description: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingBottom: 24,
  },
  price: {
    fontFamily: '"Roboto", sans-serif',
    paddingHorizontal: 8,
    paddingBottom: 24,
    fontWeight: 'bold',
    fontSize: 32,
    color: SECONDARY_COLOR,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 24,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: WHITE},
  subtitle: {
    fontFamily: '"Roboto", sans-serif',
    color: PRIMARY_COLOR,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});
