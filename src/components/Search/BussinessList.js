import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../Shared/Colors'
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native';
import BusinesItem from './BusinesItem';
import { useNavigation } from '@react-navigation/native';

export default function BussinessList({placeList}) {
    const navigation =useNavigation();
  return (
    <View>
      <LinearGradient 
      colors={["transparent", Colors.WHITE]}
      style={{ padding: 20, with: Dimensions.get("screen").width }}
       >
        <FlatList 
        data={placeList} 
        horizontal={true}
        renderItem={({item,index})=>index<=6&&(
            <TouchableOpacity onPress={()=>navigation.navigate(
                'place-detail',
                {
                    place: item
                }
            )}>
            <BusinesItem place={item} />
            </TouchableOpacity>
        )}
         />
      </LinearGradient>
    </View>
  )
}