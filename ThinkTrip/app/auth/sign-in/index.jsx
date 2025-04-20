import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseConfigs';

export default function SignIn() {
    const navigation=useNavigation();

    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    
    },[])   

    const router =useRouter();

    const onSignIn=()=>{
        if(!email&&!password){
            ToastAndroid.show("Please Enter Email & Password",ToastAndroid.LONG)
            return ;
        }

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode==='getAuth/invalid-credential'){
        ToastAndroid.show("Invalid Credentials",ToastAndroid.LONG)
    }
  });

    }
    
  return (
    
    <View style={{
        padding:25,
        paddingTop:70,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>

{/* Arrow button */}

<TouchableOpacity
    onPress={()=>{
      router.back()
    }}
    >
    <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity >
        <Text style={{
            fontFamily:'outfit',
            fontSize:30,
            marginTop:30
        }}>
            Let's Sign You In
        </Text>

        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:30,
            fontSize:30,
            marginTop:20,
            color:Colors.GRAY
        }}>
            Welcome Back
        </Text>

        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:30,
            fontSize:30,
            marginTop:10,
            color:Colors.GRAY
        }}>
            You've been missed!
             
        </Text>
 {/* Email */}
        <View
        style={{
            marginTop:30,
        }}>
            <Text style={{
                fontFamily:'outfit-medium',

            }}
            
            >Email:</Text>
            <TextInput
            
            onChangeText={(value)=>setEmail(value)}
            style={styles.input}
            placeholder='Enter Email'></TextInput>
        </View>

    {/* Password */}

    <View
        style={{
            marginTop:30,
        }}>
            <Text style={{
                fontFamily:'outfit-medium',
            }}
            
            >Password:</Text>
            <TextInput
            onChangeText={(value)=>setPassword(value)}
            secureTextEntry={true}
            style={styles.input}
            placeholder='Enter Password'></TextInput>

        </View>
      
      {/* SigIn Button */}

      <TouchableOpacity 
      onPress={onSignIn}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
          borderRadius:15,  
          marginTop:20,
        }}>
        <Text
        style={{
            color:Colors.WHITE,
            textAlign:'center',
            fontFamily:'outfit-medium',


        }}
        >SignIn</Text>
      </TouchableOpacity>

    {/* Create Account button */}

    <TouchableOpacity
    onPress={()=>{
        router.replace('auth/sign-up')
    }}
      style={{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderWidth:1,
          borderRadius:15,  
          marginTop:20,
        }}>
        <Text
        style={{
            color:Colors.PRIMARY,
            textAlign:'center',
            fontFamily:'outfit-medium',


        }}
        >Create Account</Text>
    </TouchableOpacity>
    </View>

  )
}
const styles=StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        fontFamily:'outfit-regular'


    }
})
