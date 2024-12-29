import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Components/StackLearn/LoginScreen';
import SignUpScreen from './Components/StackLearn/SignUpScreen';
import SplashScreen from './pages/SplashScreen';
import CategoryDetail from './pages/CategoryDetail';
import HomePage from './pages/HomePage';
import Details from './Components/StackLearn/Details';
import PaymentPage from './pages/PaymentPage';
import HomeHeader from './pages/HomeHeader';
import ProfilePage from './pages/Profile.js';
import NotificationPage from './pages/Notification.js';
import Toast from 'react-native-toast-message';
import UploadScreen1 from './Components/StackLearn/Upload1.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="Upload" component={UploadScreen1} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen 
            name="Home" 
            component={HomePage} 
            options={({ navigation }) => ({
              header: () => <HomeHeader navigation={navigation} />  // Pass navigation to HomeHeader
            })} 
          />
          <Stack.Screen name="Profile" component={ProfilePage} /> 
          <Stack.Screen name="Notification" component={NotificationPage} /> 
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} /> 
          <Stack.Screen name="PaymentPage" component={PaymentPage} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Initialize Toast here */}
      <Toast />
    </>
  );
}

export default App;
