import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#F9F9F9',
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
    backgroundColor: '#fff',
    marginRight: 16,
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: '#114232',
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontFamily: '"Roboto", sans-serif',
    color: '#623947',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
