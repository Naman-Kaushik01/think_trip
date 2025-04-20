import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveBackgroundColor:Colors.PRIMARY
    }}>
      <Tabs.Screen 
        name="mytrip" 
        options={{ 
          tabBarIcon:({color})=><Ionicons name="location" size={24} color={color} />,
          title: "My Trip" }} 
      />
      <Tabs.Screen 
        name="discover" 
        options={{ 
          tabBarIcon:({color})=><Ionicons name="globe-outline" size={24} color={color} />,
          title: "Discover" }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />,
          title: "Profile" }} 
      />
    </Tabs>
  );
}
