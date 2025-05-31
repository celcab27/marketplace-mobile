import {StyleSheet} from 'react-native';
import {GRAY} from '../../theme/colors';

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
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: '#114232',
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontFamily: '"Roboto", sans-serif',
    color: '#623947',
    fontWeight: 'bold',
  },
});
