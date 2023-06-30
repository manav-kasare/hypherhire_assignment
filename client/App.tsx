import React from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';

import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <DataProvider>
      <AppNavigation />
      <Toast />
    </DataProvider>
  );
}
