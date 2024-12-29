import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList, StyleSheet, ActivityIndicator, Image, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/do7drez5p/upload'; 
const UPLOAD_PRESET = 'Unsigned_preset'; 

export default function AdminHomeScreen({ route }) {
  const { userId } = route.params;
  const navigation = useNavigation();

  const [categoryName, setCategoryName] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategories = async () => {
    try {
      const categorySnapshot = await firestore().collection('Categories').get();
      const categoryList = categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(categoryList);
    } catch (error) {
      console.error('Error fetching categories: ', error);
    }
  };

  const fetchProducts = async (categoryId) => {
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
    }
  };

  const uploadToCloudinary = async (file) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
      data.append('upload_preset', UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const result = await response.json();
      setUploading(false);

      if (response.ok) {
        return result.secure_url; 
      } else {
        Alert.alert('Upload failed', result.error.message || 'Unknown error');
        return null;
      }
    } catch (error) {
      setUploading(false);
      Alert.alert('Upload failed', error.message);
      return null;
    }
  };

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate('AdminLoginScreen');
    } catch (error) {
      console.error('Error signing out: ', error);
      Alert.alert('Error', error.message);
    }
  };

  const handleUploadImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });

      const imageUrl = await uploadToCloudinary(file);
      if (imageUrl) {
        setProductImage(imageUrl);
        Alert.alert('Success', 'Image uploaded successfully!');
      }
    } catch (error) {
      if (!DocumentPicker.isCancel(error)) {
        Alert.alert('Error', error.message);
      }
    }
  };

  const handleAddProduct = async () => {
    if (!selectedCategoryId) {
      Alert.alert('Error', 'Please select a category first.');
      return;
    }
    if (productName.trim() === '' || productPrice.trim() === '' || !productImage) {
      Alert.alert('Error', 'Product name, price, and image are required.');
      return;
    }
    try {
      await firestore()
        .collection('Categories')
        .doc(selectedCategoryId)
        .collection('Products')
        .add({
          name: productName,
          price: parseFloat(productPrice),
          image: productImage,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      Alert.alert('Success', 'Product added successfully!');
      setProductName('');
      setProductPrice('');
      setProductImage('');
      fetchProducts(selectedCategoryId); 
    } catch (error) {
      console.error('Error adding product: ', error);
      Alert.alert('Error', 'Failed to add product.');
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>Welcome, Admin ID: {userId}</Text>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Add New Category</Text>
        <TextInput
          placeholder="Enter category name"
          value={categoryName}
          onChangeText={setCategoryName}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Button title="Add Category" onPress={() => {}} />
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 10,
              backgroundColor: selectedCategoryId === item.id ? 'lightgray' : 'white',
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              fetchProducts(item.id);
            }}
          >
            {item.name}
          </Text>
        )}
      />

      {selectedCategoryId && (
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Add New Product</Text>
          <TextInput
            placeholder="Enter product name"
            value={productName}
            onChangeText={setProductName}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Enter product price"
            value={productPrice}
            onChangeText={setProductPrice}
            keyboardType="numeric"
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <Button title="Upload Image" onPress={handleUploadImage} />
          {uploading && <ActivityIndicator size="large" color="#0000ff" />}
          {productImage ? <Image source={{ uri: productImage }} style={{ width: 100, height: 100, marginTop: 10 }} /> : null}
          <Button title="Add Product" onPress={handleAddProduct} />
        </View>
      )}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>
            {item.name} - ${item.price.toFixed(2)}
          </Text>
        )}
      />
      <Button title="Sign Out" onPress={handleSignOut} />
    </ScrollView>
  );
}
