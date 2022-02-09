import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Navigation = props => {
    return (
        <NavigationContainer>
                 <Stack.Navigator>
                 <Stack.Screen name="Homes" component={MyTabs} options={{headerShown: false}} />
                 </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;