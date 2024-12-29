import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Order = ({ route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={{color:'black'}}>Price: {item.price} {item.currency}</Text>
      <Text style={{color:'black'}}>Description: {item.description}</Text>

      <View style={styles.quantityContainer}>
        <Button title="-" onPress={decrementQuantity} />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Button title="+" onPress={incrementQuantity} />
      </View>

      <Text style={{color:'black'}}>Total Price: {item.price * quantity} {item.currency}</Text>

      <Button title="Place Order" onPress={() => alert('Order placed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff3e6',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 20,
    color:'black',
  },
});

export default Order;
