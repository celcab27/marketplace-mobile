import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {RootStackParamList} from '../../navigation/tabNavigation';
import {PRIMARY_LIGHT_COLOR} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {ItemI} from '../../interfaces';
import React from 'react';
import style from './style';

interface ItemCardProps {
  item: ItemI;
}

function ItemCard({item}: ItemCardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Detail', {item: item.id})}
      underlayColor={PRIMARY_LIGHT_COLOR}
      style={style.container}>
      <View>
        <Image source={{uri: item.thumbnail}} style={style.image} />
        <View style={{padding: 10}}>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ItemCard;
