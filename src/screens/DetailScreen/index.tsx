import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {RootStackParamList} from '../../navigation/tabNavigation';
import {useGetProductByID} from '../../hooks/useGetProductByID';
import StatusContainer from '../../components/StatusContainer';
import React, {useContext, useEffect, useState} from 'react';
import {ItemsContext} from '../../context/itemContext';
import {ItemI} from '../../interfaces';
import style from './style';

function DetailScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Detail'>) {
  const {item: itemParams} = route.params;
  const [item, setItem] = useState<ItemI>();
  const {addItem} = useContext(ItemsContext);
  const {product, isError, isLoading} = useGetProductByID(itemParams);

  useEffect(() => {
    if (product) {
      setItem(product);
    }
  }, [product]);

  return (
    <StatusContainer
      isError={isError}
      isLoading={isLoading}
      children={
        <View style={style.container}>
          <Image source={{uri: item?.thumbnail}} style={style.image} />
          <View style={style.descriptionContainer}>
            <Text style={style.title}>{item?.title}</Text>
            <Text style={style.subtitle}>
              {item?.brand} - {item?.stock} disponibles
            </Text>
            <Text style={style.description}>{item?.description}</Text>
            <Text style={style.price}>${item?.price}</Text>
          </View>
          <TouchableHighlight
            style={style.button}
            underlayColor="#759188"
            onPress={() => {
              if (!item) return;
              addItem(item);
            }}>
            <Text style={style.buttonText}>Agregar al carrito</Text>
          </TouchableHighlight>
        </View>
      }
    />
  );
}
export default DetailScreen;
