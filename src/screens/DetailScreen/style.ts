import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth * 0.9;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    color: '#114232',
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 8,
    paddingVertical: 8,
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
    color: '#623947',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#114232',
    borderRadius: 24,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: '#fff'},
});
