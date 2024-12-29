import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ route }) {
  const { userId } = route.params; // Extract userId from route params
  const navigation = useNavigation();

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate('LoginScreen'); // Redirect to login screen after sign out
    } catch (error) {
      console.error('Error signing out: ', error);
      Alert.alert('Error', error.message);
    }
  };

  // Handle navigation to view posts screen
  const handleViewPost = () => {
    navigation.navigate('ViewPost'); // Navigate to ViewPostScreen
  };

  // Handle navigation to add post screen
  const handleAddPost = () => {
    navigation.navigate('AddPost'); // Navigate to AddPostScreen
  };

  // Handle navigation to delete post screen (could be expanded for deletion functionality)
  const handleDeletePost = () => {
    // Implement delete functionality or navigate to delete screen
    navigation.navigate('DeletePost');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome, User {userId}</Text>

      {/* View Post Button */}
      <TouchableOpacity style={styles.button} onPress={handleViewPost}>
        <Text style={styles.buttonText}>View Post</Text>
      </TouchableOpacity>

      {/* Add Post Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddPost}>
        <Text style={styles.buttonText}>Add Post</Text>
      </TouchableOpacity>

      {/* Delete Post Button */}
      <TouchableOpacity style={styles.button} onPress={handleDeletePost}>
        <Text style={styles.buttonText}>Delete Post</Text>
      </TouchableOpacity>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#4CAF50',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
