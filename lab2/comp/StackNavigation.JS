// import React, {useState}from 'react'
// import { Button,View, Text } from 'react-native'
// import { NavigationContainer} from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// function App(){
//   const Stack=  createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name = 'Login' component = {Login} />
//         <Stack.Screen name = 'Home' component={Home}/>
//         <Stack.Screen name  = 'Home1 'component={Home1}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// };

// const Home1 = (props) =>
// {
//   return(
//     <View>
//       <Text>
//         Home page
//       </Text>
//       <Button title='click me' onPress={()=> props.navigation.navigate('Home')}/>
//     </View>
//   )
// }
// const Home = () => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }
// const Login = (props) =>{
//   return(
//  <View>
//    <Text>
//     Login Screen
//   </Text>
//   <Button title='click me' onPress={() => props.navigation.navigate('Home1')}/>
//  </View>
//   )
// }
// export default App;