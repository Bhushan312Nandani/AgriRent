import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DetailScreen = ({ route }) => {
  const { item } = route.params; 

  const renderDayItem = ({ item }) => (
    <View style={styles.dayContainer}>
      <Text style={{ textAlign: 'center' }}>Date: {item?.datetime}</Text>
      <Text style={{ textAlign: 'center' }}>Temperature: {item?.temp}°F</Text>
      <Text style={{ textAlign: 'center' }}>Conditions: {item?.conditions}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#48fdff', '#6c65d3']} style={styles.container}>
      <Text style={styles.title}>Weather for {item?.resolvedAddress}</Text>
      <Text style={styles.detail}>Latitude: {item?.latitude}</Text>
      <Text style={styles.detail}>Longitude: {item?.longitude}</Text>
      <Text style={styles.detail}>Timezone: {item?.timezone}</Text>
      
      <FlatList
        data={item?.days} 
        keyExtractor={(day) => day?.datetime} 
        renderItem={renderDayItem} 
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  detail: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle:'italic',
    marginBottom: 5, 
    color: '#fff',
  },
  dayContainer: {
    marginVertical: 10,
  },
});

export default DetailScreen;
 