import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      await firestore()
        .collection('Users')
        .doc(userId)
        .set({
          email: email,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      Alert.alert('Success', 'User registered successfully!');
      setEmail('');
      setPassword('');
      navigation.navigate('LoginScreen'); // Navigate to Login screen after successful sign-up
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <View style={{ marginTop: 10 }}>
        <Button title="Go to Login" onPress={() => navigation.navigate('LoginScreen')} />
      </View>
    </View>
  );
}
