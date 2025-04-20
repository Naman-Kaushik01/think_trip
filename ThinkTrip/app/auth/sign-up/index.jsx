import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'; // Fixed import
import { auth } from '../../../configs/firebaseConfigs';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCreateAccount = () => {
    if (!email || !password || !fullname) { // Fixed validation
      ToastAndroid.show("Please enter all details.", ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password) // Using imported auth
      .then((userCredential) => {
        console.log(userCredential.user);
        ToastAndroid.show("Account created successfully!", ToastAndroid.LONG);
        router.replace('/mytrip')

        
      })
      .catch((error) => {
        console.log(error.code, error.message);
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  };

  return (
    <View style={{ padding: 25, paddingTop: 70 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: 'outfit', fontSize: 30, marginTop: 30 }}>
        Create New Account
      </Text>

      {/* Full Name */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: 'outfit-medium' }}>Full Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      {/* Email */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: 'outfit-medium' }}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      {/* Password */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: 'outfit-medium' }}>Password:</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity 
        onPress={onCreateAccount} // Fixed button
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
          fontFamily: 'outfit-medium',
        }}>Create Account</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          borderWidth: 1,
          borderRadius: 15,
          marginTop: 20,
        }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center',
          fontFamily: 'outfit-medium',
        }}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit-regular',
  },
});
