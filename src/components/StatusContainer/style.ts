import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  loadingContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {width: 50, height: 50, alignSelf: 'center'},
  errorContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
