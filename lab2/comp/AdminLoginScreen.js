import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function AdminLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleAdminSignIn = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      const adminDoc = await firestore()
        .collection('Admins')
        .doc(userId)
        .get();

      if (adminDoc.exists) {
        Alert.alert('Success', 'Admin logged in successfully!');
        navigation.navigate('AdminHomeScreen', { userId }); // Navigate to Admin Home screen after successful login
      } else {
        Alert.alert('Error', 'No admin record found. Please sign up as an admin.');
        await auth().signOut();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        placeholder="Enter admin email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter admin password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Admin Sign In" onPress={handleAdminSignIn} />
      <View style={{ marginTop: 10 }}>
        <Button title="Go to Admin Sign Up" onPress={() => navigation.navigate('AdminSignUpScreen')} />
      </View>
    </View>
  );
}
