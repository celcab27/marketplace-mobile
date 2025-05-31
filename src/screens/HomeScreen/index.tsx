import {useGetProductsCategories} from '../../hooks/useGetCategories';
import StatusContainer from '../../components/StatusContainer';
import {useGetProducts} from '../../hooks/useGetProducts';
import {FlatList, Text, View} from 'react-native';
import {ORDER_OPTIONS} from '../../utils/filters';
import ItemCard from '../../components/ItemCard';
import {SelectOptionI} from '../../interfaces';
import Select from '../../components/Select';
import React, {useState} from 'react';
import style from './style';

function HomeScreen() {
  const [selectedOption, setSelectedOption] = useState<
    SelectOptionI | undefined
  >();
  const [sortOption, setSortOption] = useState<SelectOptionI | undefined>();
  const {products, isLoading, isError} = useGetProducts({
    category: selectedOption?.id || '',
    orderOption: sortOption?.id,
  });
  const {
    categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetProductsCategories();

  return (
    <View style={style.container}>
      <StatusContainer
        isLoading={isLoading || categoriesLoading}
        isError={isError || categoriesError}
        children={
          <FlatList
            ListHeaderComponent={
              <View>
                <Text style={style.title}>Listado de Productos</Text>
                <View style={style.selectsContainer}>
                  <Select
                    options={categories}
                    setSelectedOption={setSelectedOption}
                    selectedOption={selectedOption}
                    title="Category"
                    key="category-select"
                  />
                  <Select
                    options={ORDER_OPTIONS}
                    setSelectedOption={setSortOption}
                    selectedOption={sortOption}
                    title="Sort By"
                    key="sorting-select"
                  />
                </View>
              </View>
            }
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
              <View style={{flex: 1, padding: 8}} key={item.id}>
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
