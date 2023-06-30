import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTheme} from '../hooks';
import {Book, Books} from '../screens';

const Stack = createNativeStackNavigator();

export default function Screens() {
  const {icons} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackImageSource: icons.back,
      }}>
      <Stack.Screen
        name="Books"
        component={Books}
        options={{
          headerTitleAlign: 'center',
          title: '자유톡',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={({route: {params}}: {route: any}) => ({
          headerTitleAlign: 'center',
          title: params?.title,
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerBackImageSource: icons.back,
        })}
      />
    </Stack.Navigator>
  );
}
