import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe App</Text>
      <Text style={styles.subtitle}>Discover delicious recipes</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 10,
  },
});
