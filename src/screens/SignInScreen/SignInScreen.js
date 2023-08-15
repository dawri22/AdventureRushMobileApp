import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import Logo from '../../../assets/LogoAdventureRush.png';
import CustomInput from '../../components/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { AppState } from 'react-native';
import { TextInput } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;


    const { height } = useWindowDimensions();

    const onSignInPress  = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth,email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const navigation = useNavigation();

 const onSignUpPress = async () => {
    navigation.navigate('Register');
    }

    const onForgotPasswordPress = () => {
        navigation.navigate('Forgot');
    }

    const onSignInFacebook = () => {
        console.warn("Facebook");
    }

    const onSignInGoogle = () => {
        console.warn("Google");
    }

    const onSignInApple = () => {
        console.warn("Apple");
    }

   

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
            
            <TextInput placeholder="Email" value={email}  onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder="Contrasena" value={password}  onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            
            {loading ? <ActivityIndicator size="large" color="#0000ff"/>
             : (
             <>
            <CustomButton text="Sign In" onPress={onSignInPress} />
            <CustomButton 
            text="No tienes una cuenta? Crear una" 
            onPress={onSignUpPress} 
            type="TERTIARY" 
            />
            </>
             )}
             

            <CustomButton text="Olvidaste tu contrasena?" onPress={onForgotPasswordPress} type="TERTIARY" />

{      /*      <CustomButton
                text="Iniciar con Facebook"
                onPress={onSignInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton
                text="Iniciar con Google"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />

            <CustomButton
                text="iniciar con Apple"
                onPress={onSignInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            /> */}

        </View>
        </ScrollView>
    )
};


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

export default SignInScreen;