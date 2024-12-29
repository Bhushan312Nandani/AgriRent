import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Details = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.propertyName}>{item.name}</Text>
      <Text style={styles.ownerName}>Owner: {item.owner.name}</Text>
      <Text style={styles.ownerPhone}>Phone: {item.owner.phone}</Text>
      <Text style={styles.address}>Address: {item.address}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  propertyName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ownerName: {
    fontSize: 18,
    marginBottom: 5,
  },
  ownerPhone: {
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
  },
});
