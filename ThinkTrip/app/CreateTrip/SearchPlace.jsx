import { View, Text ,Image, TouchableOpacity,ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { router } from 'expo-router';



export default function SearchPlace() {
  
  const navigation =useNavigation();
  const router=useRouter();

  useEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:'Choose Your Favourite Place',
        headerStyle:{
          backgroundColor:Colors.GRAY
        },
        headerTitleStyle:{
          color:Colors.WHITE,
          fontFamily:'outfit'
        }
        
    })
  },[])
 

  return (
    <ScrollView
      style={{
        paddingTop: 100,
        backgroundColor: Colors.WHITE,
      }}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      showsVerticalScrollIndicator={true}
    >
      <TouchableOpacity
      onPress={()=>router.push('/CreateTrip/SelectTraveler')}
        style={{
          borderWidth: 2,
          borderColor: Colors.GRAY,
          borderRadius: 5,
          margin: 10,
          
        }}
        
      >
        <Image
          source={require('./../../assets/images/paris.jpeg')}
          style={{
            width: 355,
            height: 170,
            margin: 5,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            margin: 5,
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}
        >
          PARIS
        </Text>
        
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>router.push('/CreateTrip/SelectTraveler')}
        style={{
          borderWidth: 2,
          borderColor: Colors.GRAY,
          borderRadius: 5,
          margin: 10,
        }}
      >
        <Image
          source={require('./../../assets/images/tajmahal.jpg')}
          style={{
            width: 355,
            height: 170,
            margin: 5,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            margin: 5,
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}
        >
          TAJMAHAL
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=>router.push('/CreateTrip/SelectTraveler')}
        style={{
          borderWidth: 2,
          borderColor: Colors.GRAY,
          borderRadius: 5,
          margin: 10,
        }}
      >
        <Image
          source={require('./../../assets/images/BurjKhalifa.jpeg')}
          style={{
            width: 355,
            height: 180,
            margin: 5,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            margin: 5,
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}
        >
          BURJ KHALIFA
        </Text>
        
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>router.push('/CreateTrip/SelectTraveler')}
        style={{
          borderWidth: 2,
          borderColor: Colors.GRAY,
          borderRadius: 5,
          margin: 10,
        }}
      >
        <Image
          source={require('./../../assets/images/barcelona.jpeg')}
          style={{
            width: 355,
            height: 200,
            margin: 5,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            margin: 5,
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}
        >
          BARCELONA
         
        </Text>
        
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>router.push('/CreateTrip/SelectTraveler')}
        style={{
          borderWidth: 2,
          borderColor: Colors.GRAY,
          borderRadius: 5,
          margin: 10,
        }}
      >
        <Image
          source={require('./../../assets/images/istanbul.jpeg')}
          style={{
            width: 355,
            height: 200,
            margin: 5,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            margin: 5,
            fontSize: 20,
            fontFamily: 'outfit-bold',
          }}
        >
          ISTANBUL
         
        </Text>
        
      </TouchableOpacity>
    </ScrollView>
  );
}