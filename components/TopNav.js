import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Home from '../screens/Home';
// import Order from './home/Order';
// import About from './restaurantDetail/About';
// import Details from './home/Details';
// import Profile from './home/Profile';
import FoodTruck from '../screens/FoodTruck';
import BigChain from '../screens/BigChain';
import Local from '../screens/Local';
const Tab = createMaterialTopTabNavigator();

export default function TopNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FoodTruck" component={FoodTruck} />
      <Tab.Screen name="BigChain" component={BigChain} />
      <Tab.Screen name="Local" component={Local} />
    </Tab.Navigator>
  );
}
