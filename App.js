import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/Navigation/TabNavigation';
import { useEffect, useState, useCallback } from 'react'
import * as Location from 'expo-location';
import { UserLocationContext } from './src/Context/UserLocationContex';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import SignInNavigation from './src/Navigation/SignInNavigation';
import ForgotPassword from './src/screens/SignInScreen/ForgotPassword';

const Stack = createNativeStackNavigator();


export default function App() {
  const [user, setUser] = useState(import('firebase/auth').User)

  useEffect(() => { 
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user'+user);
      setUser(user);
    });

  }, []);


  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [fontsLoaded] = useFonts({
    'raleway': require('./assets/Fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/Fonts/Raleway-Bold.ttf'),

  });

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

 
    return (
    
      <View style={styles.root}>
        
      <UserLocationContext.Provider value={{ location, setLocation }}> 
          <NavigationContainer>
          {user ? (
            <TabNavigation></TabNavigation>
          ) : (
            <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name='Login' component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Forgot" component={ForgotPassword} />
    </Stack.Navigator>
          )}            
          </NavigationContainer>
      </UserLocationContext.Provider> 
        
      </View>
    );
  

  
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',

  },

});
