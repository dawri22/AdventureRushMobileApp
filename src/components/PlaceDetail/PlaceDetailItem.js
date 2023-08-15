import { View, Text, Image, TouchableOpacity } from "react-native";
import {React, useState} from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import GoogleMapView from "../Home/GoogleMapView";
import Share from "../../Services/Share";
import { MaterialIcons } from '@expo/vector-icons';
import SavePlace from "../../Services/SavePlace";
import { useNavigation } from '@react-navigation/native';


export default function PlaceDetailItem({ place, onDirectionClick }) {





  return (
    <View>
      <Text
        style={{
          fontSize: 26,
          fontFamily: "raleway-bold",
        }}
      >
        {place.name}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="star" size={24} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyCOB0adE6023hDnO7v0Fz8yqGC5pgKLX1g",
          }}
          style={{
            width: "100%",
            maxWidth: 400,
            height: 200,
            borderRadius: 15,
          }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}

      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          fontFamily: "raleway",
          marginBottom: 5,
        }}
      >
        {place.vicinity?place.vicinity:place.formatted_address}
      </Text>

      {place?.opening_hours ? (
        <Text
          style={{
            fontFamily: "raleway",
          }}
        >
          {place?.opening_hours?.open_now == true ? "(Open now)" : "Close now"}
        </Text>
      ) : null}
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          display: "flex",
          gap: 10,
        }}
      >
       <TouchableOpacity onPress={()=>onDirectionClick()}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:Colors.GRAY,
            width:110,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
        
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Direccion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Share.SharePlace(place)}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:Colors.GRAY,
            width:100,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
         <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Compartir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log("guardado")}
          style={{
            direction: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor:Colors.GRAY,
            width:100,
            padding:3,
            borderRadius:40,
            justifyContent:'center'
          }}
        >
         <MaterialIcons name="save-alt" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Guardar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
