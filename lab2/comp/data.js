import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { View, Text, Button, StyleSheet } from 'react-native';

const data = (props) => {
  //const [Count,setCount] = useState(0);
  //const [Data,setData] = useState(100);

 

  useEffect(()=>{
    console.warn('Hello2');

  },[props.info.DataOne])
  return(
    <View>
    
      
      <Text style={{fontSize:40}}>data : {props.info.DataOne}</Text>
    </View>
  )
    }
      





  export default data;