import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Books} from '../screens';

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
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
    </Stack.Navigator>
  );
}
