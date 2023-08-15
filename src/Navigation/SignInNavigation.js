import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

export default function SignInNavigation() {
    const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={SignInScreen} />

        
    </Stack.Navigator>
  </NavigationContainer>
  )
}