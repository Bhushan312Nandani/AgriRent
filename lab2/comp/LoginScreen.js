import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Check if the user is an admin
      const adminDoc = await firestore().collection('Admins').doc(userId).get();
      if (adminDoc.exists) {
        Alert.alert('Success', 'Admin logged in successfully!');
        navigation.navigate('AdminHomeScreen', { userId });
      } else {
        // Check if the user is a regular user
        const userDoc = await firestore().collection('Users').doc(userId).get();
        if (userDoc.exists) {
          Alert.alert('Success', 'User logged in successfully!');
          navigation.navigate('UserHomeScreen', { userId });
        } else {
          Alert.alert('Error', 'No corresponding user or admin record found.');
        }
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
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <View style={{ marginTop: 10 }}>
        <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUpScreen')} />
      </View>
    </View>
  );
}
