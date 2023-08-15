import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/HomeScreen/Home';
import Fav from '../screens/FavScreen/Fav';
import Search from '../screens/SearchScreen/Search';
import Profile from '../screens/ProfileScreen/Profile';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import HomeNavigation from './HomeNavigation';


export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeNavigation} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="home" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="Search" component={Search}
             options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="ios-search-circle-outline" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="Fav" component={Fav} 
            options={{
                tabBarLabel: 'Fav',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="heart-circle-outline" size={size} color={color} />
                )
            }}
            
            />
            <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user-circle" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
} 