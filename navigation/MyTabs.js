import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import AppIcon, { Icons } from '../components/AppIcon';
import Colors from "../components/Colors";
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ViewCart from '../screens/ViewCart';
import Favorite from '../screens/Favorite';
const BottomTab = ({ type, color, size = 24, isFocused, index }) => {
    const icon = index == 0 ? 'home' : 'heart';
    const gradient = index == 1;
    return (
      <View>
        {gradient ? (
          <LinearGradient
            colors={[Colors.light, Colors.dark]}
            start={{ x: isFocused ? 0 : 1, y: 0 }} end={{ x: isFocused ? 1 : 0, y: 0 }}
            style={styles.middleIcon}>
            <AppIcon name={'shopping-basket'} type={type} size={size} color={'white'} />
          </LinearGradient>
        ) : (
          <View style={styles.icon}>
            <AppIcon name={icon} type={type} size={size} color={color} />
          </View>
        )}
      </View>
    )
  }
  const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={Home} options={{ 
                headerShown :false
              }} />
             {/* <HomeStack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ 
                headerShown :false
              }}/>
          <HomeStack.Screen name="OrderCompleted" component={OrderCompleted} options={{ 
                headerShown :false
              }}/> */}

        </HomeStack.Navigator>
    )
}
const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View
        style={styles.bottomBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }
  
          const color = isFocused ? Colors.dark : Colors.gray;
  
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              testID={options.tabBarTestID}
              accessibilityRole="button"
            >
              <BottomTab
                type={index !== 1 ? Icons.MaterialCommunityIcons : Icons.FontAwesome5}
                index={index}
                isFocused={isFocused}
                size={24}
                color={color}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
  
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
export default function MyTabs()  {
    return (
<Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="home" component={HomeStackScreen} options={{ 
                headerShown :false
              }} />
      <Tab.Screen name="viewCart" component={ViewCart} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
    )}
    
const styles = StyleSheet.create({
    bottomBar: {
      height: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    middleIcon: {
      bottom: 18,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.6,
      elevation: 8,
    }
  });