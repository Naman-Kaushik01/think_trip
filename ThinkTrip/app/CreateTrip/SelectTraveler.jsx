import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { use } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../.././constants/Colors'

export default function SelectTraveler() {

  const navigation=useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
      

    })
  },[])
  return (
    <View
    style={{
      padding:80,
      paddingLeft:20,
      paddingTop:80,
      backgroundColor:Colors.WHITE,
      height:'100%'

    }}
    >
      <Text
      style={{
        fontSize:30,
        fontFamily:'Outfit-bold',
        marginTop:10
      }}>Who is Travelling ?</Text>
      <View
      
      style={{
        marginTop:20
      }}>
        <Text
        style={{
          fontSize:20,
          fontFamily:'Outfit-bold'
        }}
        >
          Choose your travels
        </Text>
      </View>
    </View>
    
  )
}