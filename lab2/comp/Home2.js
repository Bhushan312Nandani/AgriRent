import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Home2({ route, navigation }) {
  const { userId } = route.params;
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSaveDetails = async () => {
    try {
      if (!age || !address || !phoneNumber) {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
      }

      await firestore().collection('UserDetails').doc(userId).set({
        age: parseInt(age),
        address: address,
        phoneNumber: phoneNumber,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Success', 'Details saved successfully!');
      setAge('');
      setAddress('');
      setPhoneNumber('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to save details. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Add Your Details</Text>

      <TextInput
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
        style={{ borderBottomWidth: 1, marginBottom: 10, fontSize: 16 }}
        keyboardType="number-pad"
      />

      <TextInput
        placeholder="Enter Address"
        value={address}
        onChangeText={setAddress}
        style={{ borderBottomWidth: 1, marginBottom: 10, fontSize: 16 }}
      />

      <TextInput
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={{ borderBottomWidth: 1, marginBottom: 20, fontSize: 16 }}
        keyboardType="phone-pad"
      />

      <Button title="Save Details" onPress={handleSaveDetails} />

      <View style={{ marginTop: 20 }}>
        <Button title="Go Back to Auth" onPress={() => navigation.navigate('SignupFirebase')} />
      </View>
    </View>
  );
}
