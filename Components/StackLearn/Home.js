import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation, route }) => {
  const { item } = route.params;

  const renderProperty = ({ item }) => (
    <TouchableOpacity onPress={()=> {navigation.navigate("Details",{item})}}>
        
    <View style={styles.propertyContainer}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.propertyName}>{item.name}</Text>
    </View>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={item.properties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  propertyContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
