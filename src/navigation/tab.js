import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search } from '../screens';
import { COLORS } from '../theme/';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'magnify';
          }
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={36} />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarStyle: {
          height: 80,
          marginHorizontal: 16,
          justifyContent: 'center',
          backgroundColor: COLORS.black,
          borderRadius: 20,
          position: 'absolute',
          left: 0,
          bottom: 10,
          right: 0,
          borderWidth: 1,
          borderColor: 'white',
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
