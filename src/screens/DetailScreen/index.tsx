import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {RootStackParamList} from '../../navigation/tabNavigation';
import {ItemsContext} from '../../context/itemContext';
import React, {useContext} from 'react';
import style from './style';

function DetailScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Detail'>) {
  const {item} = route.params;
  const {addItem} = useContext(ItemsContext);

  return (
    <View style={style.container}>
      <Image source={{uri: item?.thumbnail}} style={style.image} />
      <View style={style.descriptionContainer}>
        <Text style={style.title}>{item?.title}</Text>
        <Text style={style.subtitle}>
          {item?.brand} - {item.stock} disponibles
        </Text>
        <Text style={style.description}>{item?.description}</Text>
        <Text style={style.price}>${item?.price}</Text>
      </View>
      <TouchableHighlight
        style={style.button}
        underlayColor="#759188"
        onPress={() => {
          addItem(item);
        }}>
        <Text style={style.buttonText}>Agregar al carrito</Text>
      </TouchableHighlight>
    </View>
  );
}
export default DetailScreen;
