import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Add from '../screens/Add';
import Favorites from '../screens/Favorites';

import Infos from '../screens/Infos';
import Preload from '../screens/Preload';
import All from '../screens/All';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="All" component={All} />
    </Stack.Navigator>
  </NavigationContainer>
);
