import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Animated, Easing } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to Home after splash
    }, 3000); // Duration of the splash screen

    return () => clearTimeout(timer);
  }, [navigation, opacity, scale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity, transform: [{ scale }] }]}>
        <Image
          source={require('../assests/Images/SplashScreen.jpg')} // Use your specified path
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Ensure background is black
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%', // Ensure the container takes full width
    height: '100%', // Ensure the container takes full height
  },
  image: {
    width: '100%', // Make the image fill the container width
    height: '100%', // Make the image fill the container height
  },
});

export default SplashScreen;
