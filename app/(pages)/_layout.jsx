import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
        <Tabs screenOptions={{
          headerShown:false}}>
            <Tabs.Screen name='Home'
            options={{
              tabBarLabel:"Home",
              tabBarIcon:({Colors})=><MaterialCommunityIcons name="home-roof" 
              size={24} color="color" />
              }}/>
            <Tabs.Screen name='Files'
             options={{tabBarLabel:"Files",
              tabBarIcon:({Colors})=><Ionicons name="folder-open-outline" 
              size={24} color="color" />
             }}/>
            <Tabs.Screen name='Starred'
             options={{tabBarLabel:"Home",
              tabBarIcon:({Colors})=><Ionicons name="star-outline" 
              size={24} color="color" />
             }}/>
        </Tabs>
  )
}