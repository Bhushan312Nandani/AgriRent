import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home1 = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.43.161:3000/test'); 
        const data = await response.json();
        
      
        console.log('API Response:', data);

        
        if (data && data.test && Array.isArray(data.test)) {
          setUsers(data.test); 
        } else if (data && data.users && Array.isArray(data.users)) {
          setUsers(data.users); 
        } else {
          Alert.alert('Error', 'No user data found.');
        }
      } catch (error) {
        console.error(error); 
        Alert.alert('Error', 'Unable to fetch user data.');
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => {
        navigation.navigate('UserDetails', { userId: item.id });
      }}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}  
        contentContainerStyle={styles.userList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  userList: {
    width: '100%',
    paddingHorizontal: 15,
  },
  userItem: {
    backgroundColor: '#e1f5fe',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0277bd',
  },
  userEmail: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});

export default Home1;
