import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
  const navigation = useNavigation(); 

  const gridItems = [
    { id: 1, title: 'Personal', image: require('../assets/science.png'), screen: 'Personal' }, 
    { id: 2, title: 'Work', image: require('../assets/business.png'), screen: 'Work' },
    { id: 3, title: 'Shopping', image: require('../assets/economics.png'), screen: 'Shoping' },
    { id: 4, title: 'Health', image: require('../assets/english.png'), screen: 'Healthcare' },
    { id: 5, title: 'Academic', image: require('../assets/litrature.png'), screen: 'Academic' },
    { id: 6, title: 'Fitness', image: require('../assets/fitness.png'), screen: 'Fitness' },
  ];

  return (
    <LinearGradient colors={['#9ecfff', '#000596']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.daily}>Welcome to Daily Task</Text>
        <View style={styles.grid}>
          {gridItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.gridItem} 
              onPress={() => {
                if (item.screen) {
                  navigation.navigate(item.screen); 
                }
              }}
            >
              <LinearGradient colors={['#48fdff', '#3930bd']} style={styles.gridItemGradient}>
                <View style={styles.itemContent}>
                  <Image source={item.image} style={styles.gridItemImage} />
                  <Text style={styles.gridItemText}>{item.title}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 48, 
    fontWeight: 'bold',
    color: '#d2feff',
    marginBottom: 10, 
    textShadowColor: '#000', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    letterSpacing: 3, 
    textTransform: 'uppercase', 
  },
  daily: {
    fontSize: 25,
    color: '#aefeff',
    marginBottom: 20,
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  gridItem: {
    width: '40%',
    height: 100,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridItemGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  itemContent: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  gridItemImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  gridItemText: {
    fontSize: 24,
    color: '#aefeff',
    fontWeight: 'bold',
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
  },
});

export default Home;
