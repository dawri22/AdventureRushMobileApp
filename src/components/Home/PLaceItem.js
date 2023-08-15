import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Shared/Colors';
import { useState } from 'react';

export default function PLaceItem({ place }) {

  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      marginTop: 20
    }}>
     {place?.photos? <Image source={{uri: 
      "https://maps.googleapis.com/maps/api/place/photo"+
      "?maxwidth=400"+
      "&photo_reference="+      
      place?.photos[0]?.photo_reference +
      "&key=AIzaSyCOB0adE6023hDnO7v0Fz8yqGC5pgKLX1g"
      }}
        style={{
          width: 120,
          maxWidth:400,
          height: 110,
          borderRadius: 15
        }}
      />: 
      <Image source={require('./../../../assets/placeholder.jpg')} 
      style={{width: 110, height: 110, borderRadius: 15}}
       /> }
      
      
      <View style={{
        flex: 1,
      }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            fontFamily: 'raleway',
            marginBottom: 5
          }}>{place.name}</Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            fontFamily: 'raleway',
            marginBottom: 5
          }} >{place.vicinity}</Text>
        <View style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5
        }}>
          <AntDesign name="star" size={24} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>

    </View>
  )
}