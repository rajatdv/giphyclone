import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tab';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Tabs" component={Tabs} />
    </AppStack.Navigator>
  );
};

export default { AppNavigator };
