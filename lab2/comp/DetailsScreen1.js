import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const DetailsScreen1 = ({ route, navigation }) => {
  const { items } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Order', { item })}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={{color:'black'}}>Price: {item.price} {item.currency}</Text>
      <Text style={{color:'black'}}>Description: {item.description}</Text>
      <Text style={{color:'black'}}>Quantity: {item.quantity}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
    
    
      <Text style={styles.title}>Items</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    
    </View>  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff3e6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff4500',
    textAlign: 'center',
    marginVertical: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    padding: 16,
    backgroundColor: '#ffe4e1',
    marginVertical: 8,
    borderRadius: 10,
    color: 'black',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6347',
  },
});

export default DetailsScreen1;
