import {PRIMARY_COLOR, PRIMARY_LIGHT_COLOR, WHITE} from '../theme/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketPurchaseIcon from '../assets/icons/MarketPurchase';
import {NavigationContainer} from '@react-navigation/native';
import HomeIcon from '../assets/icons/HomeIcon';
import HomeStack from './listStack';
import CartStack from './cartStack';
import React from 'react';
import {ItemI} from '../interfaces';

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['marketplace://'],
  config: {
    screens: {
      HomeStack: {
        path: 'list',
        screens: {
          Detail: 'detail/:item',
        },
      },
    },
  },
};

export type RootStackParamList = {
  HomeMain: undefined;
  Detail: {item: string};
};

const Tabs = () => {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: PRIMARY_COLOR,
            borderTopWidth: 0,
            height: 70,
            paddingTop: 8,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let icon;

            if (route.name === 'HomeStack') {
              icon = (
                <HomeIcon fillColor={focused ? WHITE : PRIMARY_LIGHT_COLOR} />
              );
            } else if (route.name === 'CartStack') {
              icon = (
                <MarketPurchaseIcon
                  fillColor={focused ? WHITE : PRIMARY_LIGHT_COLOR}
                />
              );
            }
            return icon;
          },
        })}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="CartStack" component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
