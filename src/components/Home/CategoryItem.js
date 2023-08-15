import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors'

export default function CategoryItem({category}) {
  return (
    <View style={{
        padding: 4, alignItems: 'center', margin: 4, width: 100, height: 100, backgroundColor:Colors.WHITE, justifyContent: 'center', borderRadius: 15
    }}>
        <Image source={category.icon}  
        style={{
            width: 35,
            height: 35
        }}
        />
        <Text>{category.status}</Text>
      <Text>{category.name}</Text>
    </View>
  )
}