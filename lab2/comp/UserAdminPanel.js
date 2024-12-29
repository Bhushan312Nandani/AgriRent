// src/screens/UserAdminPanel.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserAdminPanel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Role</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text style={styles.buttonText}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AdminSignUpScreen')}
      >
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UserAdminPanel;
