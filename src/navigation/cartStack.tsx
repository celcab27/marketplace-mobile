import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CartMain" component={CartScreen} />
    </Stack.Navigator>
  );
}

export default CartStack;
