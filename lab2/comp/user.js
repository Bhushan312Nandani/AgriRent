import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { View, Text, Button, StyleSheet } from 'react-native';

const user = (props) => {
  //const [Count,setCount] = useState(0);
  //const [Data,setData] = useState(100);

  useEffect(()=>{
    console.warn('Hello');

  },[props.info.Count])

 
  return(
    <View>
    
      <Text style={{fontSize:40}}>data : {props.info.Count}</Text>
     
    </View>
  )
    }
      





  export default user;