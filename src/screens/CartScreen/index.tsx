import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ItemsContext} from '../../context/itemContext';
import ChartItem from '../../components/ChartItem';
import style from './style';

function CartScreen() {
  const {items} = useContext(ItemsContext);

  return (
    <View style={style.container}>
      <Text style={style.title}>Carrito de Compras</Text>
      <FlatList
        data={items ?? []}
        renderItem={({item}) => <ChartItem item={item} />}
      />
    </View>
  );
}
export default CartScreen;
