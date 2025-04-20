import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function login() {
const router= useRouter();  

  return (
    <View>
    <Image source={require('./../assets/images/loginimg.jpeg')}
    style={{
        width:'100%',
        height:500
    }}

    ></Image>
    <View style={styles.container}>
        <Text style={{
            fontSize:30,
            fontFamily:'outfit',
            textAlign:'center'
        }}>Think Trip</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            textAlign:'center',
            color:Colors.GRAY
            
        }}>
        Discover your next adventure with ease. Get personalized trip plans in seconds.Just ThinkTrip!
        </Text>
    <TouchableOpacity style={styles.button}
    onPress={()=>router.push('/auth/sign-in')}
    
    
    >
    <Text style={{
        color:Colors.WHITE,
        fontFamily:'outfit-medium',
        fontSize:22,
        textAlign:'center',
        marginTop:5
    }}>
        Get Started
    </Text>
    </TouchableOpacity>
        
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:'100%',
        padding:25
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        color:Colors.WHITE,
        borderRadius:99,
        marginTop:'15%'
    }
    


})