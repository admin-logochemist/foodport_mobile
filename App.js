import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import ViewCart from './screens/ViewCart';
import Favorite from './screens/Favorite';
import Navigation from './navigation/Navigation';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    
   <Navigation/>
 
  );
}

export default App;