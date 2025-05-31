import StatusContainer from '../../components/StatusContainer';
import {useGetProducts} from '../../hooks/useGetProducts';
import {FlatList, Text, View} from 'react-native';
import ItemCard from '../../components/ItemCard';
import style from './style';
import React from 'react';

function HomeScreen() {
  const {products, isLoading, isError} = useGetProducts();

  return (
    <View style={style.container}>
      <Text style={style.title}>Listado de Productos</Text>
      <StatusContainer
        isLoading={isLoading}
        isError={isError}
        children={
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item, index) =>
              item.id?.toString() || index.toString()
            }
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
        }
      />
    </View>
  );
}
export default HomeScreen;
