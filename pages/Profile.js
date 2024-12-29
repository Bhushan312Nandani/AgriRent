import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePage = ({ navigation , name,email  }) => {
  // Dummy user data
  
  const user = {
    Name: 'John Doe',
    Email: 'johndoe@example.com',
    profileImage: 'https://via.placeholder.com/150',  // You can replace this with a real URL or local asset
    bio: 'A passionate React Native developer.',
  };

  // Handle button press (e.g., edit profile, logout)
  const handleButtonPress = () => {
    console.log('Button Pressed!');
    // Implement your logic here (e.g., navigate to an edit screen or logout)
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      
      {/* User Info */}
      <Text style={styles.name}>{user.Name}</Text>
      <Text style={styles.email}>{user.Email}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      {/* Button to simulate an action */}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      
      {/* Another Button for Logout */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleButtonPress}>
        <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Profile Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF4136',
  },
  logoutText: {
    color: '#fff',
  },
});

export default ProfilePage;
