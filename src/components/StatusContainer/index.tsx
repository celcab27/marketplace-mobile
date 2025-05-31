import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import style from './style';

interface StatusContainerProps {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}

function StatusContainer({isLoading, isError, children}: StatusContainerProps) {
  const Status = isLoading ? (
    <View style={style.loadingContainer}>
      <LottieView
        source={require('../../assets/lotties/loading.json')}
        autoPlay
        loop
        style={style.lottie}
      />
    </View>
  ) : (
    <View style={style.errorContainer}>
      <Text>Ups! Ocurrió un error.</Text>
      <Text>Por favor volvé a intentar más tarde.</Text>
    </View>
  );

  return isLoading || isError ? Status : children;
}

export default StatusContainer;
