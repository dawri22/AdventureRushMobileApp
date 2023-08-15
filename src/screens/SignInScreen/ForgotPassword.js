import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const sendPasswordEmailReset = () => {
        sendPasswordResetEmail(auth,email) .then(() => {
            // Correo electrónico de restablecimiento de contraseña enviado exitosamente
            alert("Correo electrónico de restablecimiento de contraseña enviado a:", email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            // Ocurrió un error al enviar el correo electrónico de restablecimiento de contraseña
           alert(error);
          });
      }
    

  return (
    <View style={styles.root}>
      <TextInput placeholder='Ingrese su email' value={email} onChangeText={setEmail} />
      <CustomButton text="Enviar email" onPress={sendPasswordEmailReset} />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '90%',
        maxWidth: 400,
        maxHeight: 400,
    }
})