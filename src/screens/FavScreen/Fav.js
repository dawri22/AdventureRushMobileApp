import React, { useState, useEffect } from 'react';
import { View, Button,StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as SQLite from 'expo-sqlite';
import Colors from '../../Shared/Colors';
import { Ionicons } from "@expo/vector-icons";
import SharePhoto from '../../Services/SharePhoto';

  // Conexión a la base de datos
  const db = SQLite.openDatabase('myDatabase.db');

export default function Fav() {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  // Solicitar permisos de cámara y ubicación
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');

      const { status: locationStatus } = await Location.requestPermissionsAsync();
      setHasLocationPermission(locationStatus === 'granted');
    })();
  }, []);

  // Función para crear la tabla si no existe
  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS photos (id INTEGER PRIMARY KEY AUTOINCREMENT, uri TEXT, latitude REAL, longitude REAL)',
        [],
        (tx, results) => {
          console.log('Tabla creada con éxito');
        },
        error => {
          console.log('Error al crear la tabla', error);
        }
      );
    });
  };

  // Función para tomar una foto y guardarla con la ubicación del usuario
  const takePhotoAndSaveWithLocation = async () => {
    if (camera) {
      // Tomar una foto
      const photo = await camera.takePictureAsync();

      // Obtener la ubicación actual del usuario
      const location = await Location.getCurrentPositionAsync({});

      // Crear la tabla si no existe
      createTable();

      // Guardar la foto y la ubicación en la tabla
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO photos (uri, latitude, longitude) VALUES (?,?,?)',
          [photo.uri, location.coords.latitude, location.coords.longitude],
          (tx, results) => {
            console.log('Foto guardada con éxito');
          },
          error => {
            console.log('Error al guardar la foto', error);
          }
        );
      });
      setPhoto(photo);
    }
  };
  


  return (
    <View>
    <View>
    {hasCameraPermission && hasLocationPermission && (
        <>
          <Camera
            style={{ width: 200, height: 200 }}
            ref={ref => setCamera(ref)}
          />
          <Button
            title="Tomar foto"
            onPress={takePhotoAndSaveWithLocation}
          />
        </>
      )}
    </View>
    <View>
    {photo && (
    <><Image
            source={{ uri: photo.uri }}
            style={styles.image} /><TouchableOpacity onPress={() => SharePhoto.SharePhotos(photo.uri)}
              style={{
                direction: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: Colors.GRAY,
                width: 100,
                padding: 3,
                borderRadius: 40,
                justifyContent: 'center'
              }}
            >
              <Ionicons name="md-share-outline" size={24} color="black" />
              <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Compartir</Text>
            </TouchableOpacity></>
    )}
    </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff'
  }
});