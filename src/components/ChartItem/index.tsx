import {Image, Text, View} from 'react-native';
import {ItemI} from '../../interfaces';
import style from './style';

interface ChartItemProps {
  item: ItemI;
}

function ChartItem({item}: ChartItemProps) {
  return (
    <View style={style.container}>
      <Image source={{uri: item.thumbnail}} style={style.image} />
      <View>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.price}>${item.price}</Text>
      </View>
    </View>
  );
}

export default ChartItem;
