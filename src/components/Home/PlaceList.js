import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PLaceItem from './PLaceItem'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function PlaceList({placeList}) {

  const navigator=useNavigation();

  const onPlaceClick=(item)=>{
    navigator.navigate('place-detail', {place: item});
  }

  return (
    <View>
      <Text
      style={{
        fontSize: 18,
        fontFamily: "raleway-bold",
        marginTop: 8,
      }}
      >Lugares encontrados {placeList.length} </Text>
      <FlatList 
      data={placeList}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>onPlaceClick(item)}>
        {<PLaceItem place={item} /> }
        </TouchableOpacity>
      )} />
    </View>
  )
}