import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemI} from '../interfaces';

export const ItemsContext = createContext<{
  items: ItemI[];
  addItem: (value: ItemI) => void;
}>({items: [], addItem: () => {}});

export const ItemsProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState<ItemI[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const data = await AsyncStorage.getItem('chart');
    setItems(data ? JSON.parse(data) : []);
  };

  const addItem = async (value: ItemI) => {
    console.log('Adding item to chart:', value);
    const previousValue = await AsyncStorage.getItem('chart');
    const formattedPreviousValue = previousValue
      ? JSON.parse(previousValue)
      : [];

    const newValue = [...formattedPreviousValue, value];

    try {
      const jsonValue = JSON.stringify(newValue);
      await AsyncStorage.setItem('chart', jsonValue);
      setItems(newValue);
    } catch (e) {
      console.error('Error saving data to AsyncStorage:', e);
      // saving error
    }
  };

  return (
    <ItemsContext.Provider value={{items, addItem}}>
      {children}
    </ItemsContext.Provider>
  );
};
