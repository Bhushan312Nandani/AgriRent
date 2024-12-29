import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/first.jpg')} 
        style={styles.image} 
      />
      {/* <Text style={styles.title}>Welcome to AgriRent</Text>
      <Text style={styles.description}>
        Rent and lease agricultural equipment with ease!
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 400,
    height: 600,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f4f4f',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    textAlign: 'center',
  },
});
