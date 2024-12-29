import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * product.price);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * product.price);
    }
  };

  const handleAddToCart = () => {
    // Here you can add the product to the cart in your state management or context
    // After adding to the cart, navigate to the OrderSuccessScreen
    navigation.navigate('OrderConfirmScreen', { product, quantity, totalPrice });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>Rs {product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.totalPrice}>Total: Rs {totalPrice.toFixed(2)}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    color: '#e63946',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
