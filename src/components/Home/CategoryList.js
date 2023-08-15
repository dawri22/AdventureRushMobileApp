import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {
    const categoryList = [
        {
            id:1,
            name:'Gasolineras',
            value:'gas_station',
            icon:require('./../../../assets/gas.png')
        },
        {
            id:2,
            name:'Restaurantes',
            value:'restaurant',
            icon:require('./../../../assets/food.png')
        },
        {
            id:3,
            name:'Atracciones',
            value:'tourist_attraction',
            icon:require('./../../../assets/attraction.png')
        },
    ]
  return (
    <View style={{marginTop: 13}}>
      <Text style={{
        fontSize: 18,
        
      }}>Seleccionar Categorias Top</Text>

      <FlatList 
      data={categoryList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
        </TouchableOpacity>
      )}
      />
    </View>
  )
}