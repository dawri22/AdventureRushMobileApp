import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TextInput } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const onRegisterPress = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth,email, password);
        console.log(response);
        alert("Check your email")
    } catch (error) {
        console.log(error);
        alert('Sign up Failed: ' + error.message);
    } finally {
        setLoading(false);
    }
  };

  const onSignUpPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.tittle}>Crear una cuenta</Text>

        <TextInput
          placeholder="Email"
          value={email}  onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="Contrasena"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <CustomButton text="Registrar" onPress={onRegisterPress} />

            <Text style={styles.text}>
              Regitrandote, tu confirmas que aceptas nuestros terminos de uso y
              politica de privacidad
            </Text>

            <CustomButton
              text="Ya tienes una cuenta? Inicia Sesion"
              onPress={onSignUpPress}
              type="TERTIARY"
            />
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 400,
    maxHeight: 250,
  },
  tittle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
});

export default SignUpScreen;
