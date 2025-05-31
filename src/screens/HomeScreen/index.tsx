import {useGetProducts} from '../../hooks/useGetProducts';
import {FlatList, Text, View} from 'react-native';
import ItemCard from '../../components/ItemCard';
import React from 'react';
import style from './style';

function HomeScreen() {
  const {products} = useGetProducts();

  return (
    <View style={style.container}>
      <Text style={style.title}>Listado de Productos</Text>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        renderItem={({item}) => (
          <View style={{flex: 1, padding: 8}}>
            <ItemCard item={item} />
          </View>
        )}
      />
    </View>
  );
}
export default HomeScreen;
