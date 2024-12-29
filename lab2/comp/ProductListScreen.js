import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function ProductListScreen({ route }) {
  const { categoryId, categoryName } = route.params;
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productSnapshot = await firestore()
          .collection('Categories')
          .doc(categoryId)
          .collection('Products')
          .get();
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products: ', error);
        Alert.alert('Error', 'Failed to load products.');
      }
    };

    fetchProducts();
  }, [categoryId]);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products in {categoryName}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        ListEmptyComponent={<Text>No products available in this category.</Text>}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Categories</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  productItem: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
