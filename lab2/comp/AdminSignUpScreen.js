import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function AdminSignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleAdminSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      await firestore()
        .collection('Admins')
        .doc(userId)
        .set({
          email: email,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      Alert.alert('Success', 'Admin registered successfully!');
      setEmail('');
      setPassword('');
      navigation.navigate('AdminLoginScreen'); // Navigate to Admin Login screen after successful sign-up
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
      <Button title="Admin Sign Up" onPress={handleAdminSignUp} />
      <View style={{ marginTop: 10 }}>
        <Button title="Go to Admin Login" onPress={() => navigation.navigate('AdminLoginScreen')} />
      </View>
    </View>
  );
}
