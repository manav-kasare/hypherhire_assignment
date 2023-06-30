import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider, useData} from '../hooks';
import {navigationRef} from '../services/navigation';
import Screens from './Screens';

// import RNBootSplash from 'react-native-bootsplash';

export default function () {
  const {theme, setTheme} = useData();

  useEffect(() => {
    StatusBar.setBackgroundColor(theme.colors.background);
    StatusBar.setBarStyle('dark-content');
    //  RNBootSplash.hide({fade: true});
    return () => {
      StatusBar.setBarStyle('default');
    };
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      text: String(theme.colors.text),
      primary: String(theme.colors.primary),
      notification: String(theme.colors.primary),
      background: String(theme.colors.background),
    },
  };

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <Screens />
      </NavigationContainer>
    </ThemeProvider>
  );
}
