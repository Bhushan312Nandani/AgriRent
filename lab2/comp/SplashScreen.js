
import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignUpScreen'); 
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.splashscreenIcon}
      resizeMode="cover"
      source={require("../assets/splash.jpg")} 
    >
      <View style={styles.logo}>
       
        <Text style={styles.colorsGame}>Regal Elite</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splashscreenIcon: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  logoIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  colorsGame: {
    fontSize: 40,
    color:'#ffffff',
    fontStyle:'italic',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
});

export default SplashScreen;
