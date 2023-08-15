import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import CustomButton from '../../components/CustomButton/CustomButton';



export default function Profile() {
  const Stack=createStackNavigator();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);
  
  return (

    <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('../../../assets/user.png')}
    />
    <Text style={styles.email}>Email: {userEmail}</Text>
    <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
      <Text style={styles.buttonText}>Cerrar sesión</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  email: {
    marginTop: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});