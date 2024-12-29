import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function OrderConfirmScreen({ route }) {
  const { product, quantity, totalPrice } = route.params || {}; // Handle missing route params
  const navigation = useNavigation();

  const handleConfirmOrder = async () => {
    try {
      // Ensure product, quantity, and totalPrice are valid
      if (!product || !product.id || !product.name || quantity === undefined || totalPrice === undefined) {
        Alert.alert('Error', 'Invalid order details. Please try again.');
        return;
      }

      // Retrieve the current user's UID
      const currentUser = auth().currentUser;
      if (!currentUser) {
        throw new Error('No user is currently signed in.');
      }
      const userId = currentUser.uid;

      // Save the order to Firestore with the user's UID
      await firestore().collection('Orders').add({
        userId: userId, // Associate order with the user's UID
        productId: product.id,
        productName: product.name,
        quantity: quantity,
        totalPrice: totalPrice,
        orderDate: firestore.FieldValue.serverTimestamp(),
      });

      // Show success message
      Alert.alert('Success', 'Order confirmed successfully!');

      // Navigate back to the home screen
      navigation.navigate('UserHomeScreen');
    } catch (error) {
      console.error('Error confirming order: ', error);
      Alert.alert('Error', error.message || 'Failed to confirm order.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Product:</Text>
        <Text style={styles.value}>{product?.name || 'N/A'}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Quantity:</Text>
        <Text style={styles.value}>{quantity || 'N/A'}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Total Price:</Text>
        <Text style={styles.value}>Rs {totalPrice?.toFixed(2) || 'N/A'}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#343a40',
  },
  value: {
    fontSize: 18,
    color: '#495057',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
