import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './comp/SignUpScreen'; // Your AuthScreen file path
import SplashScreen from './comp/SplashScreen';
import UserAdminPanel from './comp/UserAdminPanel'
import LoginScreen from './comp/LoginScreen';
import AdminSignUpScreen from './comp/AdminSignUpScreen';
import AdminLoginScreen from './comp/AdminLoginScreen';
import AdminHomeScreen from './comp/AdminHomeScreen';
import UserHomeScreen from './comp/UserHomeScreen'
import ProductListScreen from './comp/ProductListScreen';
import ProductDetailsScreen from './comp/ProductDetailsScreen';
import OrderConfirmScreen from './comp/OrderConfirmScreen'; 
import ViewPost from './comp/ViewPost'; 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="UserAdminPanel" component={UserAdminPanel} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdminSignUpScreen" component={AdminSignUpScreen} />
        <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="OrderConfirmScreen" component={OrderConfirmScreen} />
        <Stack.Screen name="ViewPost" component={ViewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}