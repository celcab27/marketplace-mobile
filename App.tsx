/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Tabs from './src/navigation/tabNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ItemsProvider} from './src/context/itemContext';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: backgroundStyle.backgroundColor}}>
        <ItemsProvider>
          <Tabs />
        </ItemsProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
