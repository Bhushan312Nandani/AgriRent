import {useEffect} from 'react';
import { View, Text, Image, StyleSheet,ActivityIndicator  } from 'react-native';
import Logo from '../assests/Images/logo.jpg';

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('Login-Screen');
    },5000)
  },[navigation])

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Developed By SIBA Private Ltd </Text>
        <Text style={styles.footerText}>All rights reserved © 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background with subtle gradient effect
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#100f0d', // Darker color for the footer text
  },
});

export default Splash;