import Svg, {Path} from 'react-native-svg';

function HomeIcon({fillColor = '#000000'}) {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 16 16" fill="none">
      <Path d="M3 1H1V3H3V1Z" fill={fillColor} />
      <Path d="M3 5H1V7H3V5Z" fill={fillColor} />
      <Path d="M1 9H3V11H1V9Z" fill={fillColor} />
      <Path d="M3 13H1V15H3V13Z" fill={fillColor} />
      <Path d="M15 1H5V3H15V1Z" fill={fillColor} />
      <Path d="M15 5H5V7H15V5Z" fill={fillColor} />
      <Path d="M5 9H15V11H5V9Z" fill={fillColor} />
      <Path d="M15 13H5V15H15V13Z" fill={fillColor} />
    </Svg>
  );
}

export default HomeIcon;
