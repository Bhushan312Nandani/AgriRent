
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomHeader = () => {
  return (
    <LinearGradient colors={['#48fdff', '#48fdff']} style={styles.headerContainer}>
      <Text style={styles.headerText}>Home Page</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default CustomHeader;
