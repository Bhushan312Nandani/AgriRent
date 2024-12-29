import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen1 = () => {
  const navigation = useNavigation();

  const categories = [
    {
      "id": 1,
      "name": "Fruits",
      "items": [
        {
          "id": 101,
          "name": "Banana",
          "price": 50,
          "currency": "PKR",
          "description": "Fresh ripe bananas.",
          "quantity": "1 dozen"
        },
        {
          "id": 102,
          "name": "Apple",
          "price": 200,
          "currency": "PKR",
          "description": "Crisp red apples.",
          "quantity": "1 kg"
        },
        {
          "id": 103,
          "name": "Mango",
          "price": 150,
          "currency": "PKR",
          "description": "Sweet and juicy mangoes.",
          "quantity": "1 kg"
        }
      ]
    },
    {
      "id": 2,
      "name": "Vegetables",
      "items": [
        {
          "id": 201,
          "name": "Tomato",
          "price": 60,
          "currency": "PKR",
          "description": "Fresh red tomatoes.",
          "quantity": "1 kg"
        },
        {
          "id": 202,
          "name": "Potato",
          "price": 40,
          "currency": "PKR",
          "description": "Organic potatoes.",
          "quantity": "1 kg"
        },
        {
          "id": 203,
          "name": "Carrot",
          "price": 70,
          "currency": "PKR",
          "description": "Crunchy carrots.",
          "quantity": "1 kg"
        }
      ]
    },
    {
      "id": 3,
      "name": "Dairy Products",
      "items": [
        {
          "id": 301,
          "name": "Milk",
          "price": 120,
          "currency": "PKR",
          "description": "Full-cream milk.",
          "quantity": "1 liter"
        },
        {
          "id": 302,
          "name": "Butter",
          "price": 200,
          "currency": "PKR",
          "description": "Unsalted butter.",
          "quantity": "500 grams"
        },
        {
          "id": 303,
          "name": "Yogurt",
          "price": 90,
          "currency": "PKR",
          "description": "Natural yogurt.",
          "quantity": "1 liter"
        }
      ]
    },
   
    {
      "id": 4,
      "name": "Bakery Items",
      "items": [
        {
          "id": 401,
          "name": "Bread",
          "price": 40,
          "currency": "PKR",
          "description": "Freshly baked bread.",
          "quantity": "1 loaf"
        },
        {
          "id": 402,
          "name": "Croissant",
          "price": 60,
          "currency": "PKR",
          "description": "Flaky and buttery croissants.",
          "quantity": "1 piece"
        },
        {
          "id": 403,
          "name": "Cake",
          "price": 800,
          "currency": "PKR",
          "description": "Chocolate layered cake.",
          "quantity": "1 piece"
        }
      ]
    },
    {
      "id": 5,
      "name": "Beverages",
      "items": [
        {
          "id": 501,
          "name": "Juice",
          "price": 120,
          "currency": "PKR",
          "description": "Fresh fruit juice.",
          "quantity": "1 liter"
        },
        {
          "id": 502,
          "name": "Soda",
          "price": 50,
          "currency": "PKR",
          "description": "Carbonated soft drink.",
          "quantity": "1 can"
        },
        {
          "id": 503,
          "name": "Coffee",
          "price": 300,
          "currency": "PKR",
          "description": "Freshly brewed coffee.",
          "quantity": "250 grams"
        }
      ]
    },
    {
      "id": 6,
      "name": "Snacks",
      "items": [
        {
          "id": 601,
          "name": "Chips",
          "price": 70,
          "currency": "PKR",
          "description": "Crispy potato chips.",
          "quantity": "200 grams"
        },
        {
          "id": 602,
          "name": "Chocolate",
          "price": 100,
          "currency": "PKR",
          "description": "Milk chocolate bars.",
          "quantity": "100 grams"
        },
        {
          "id": 603,
          "name": "Popcorn",
          "price": 50,
          "currency": "PKR",
          "description": "Butter popcorn.",
          "quantity": "100 grams"
        }
      ]
    },
    {
      "id": 7,
      "name": "Frozen Foods",
      "items": [
        {
          "id": 701,
          "name": "Frozen Peas",
          "price": 100,
          "currency": "PKR",
          "description": "Frozen green peas.",
          "quantity": "500 grams"
        },
        {
          "id": 702,
          "name": "Ice Cream",
          "price": 250,
          "currency": "PKR",
          "description": "Creamy vanilla ice cream.",
          "quantity": "1 liter"
        },
        {
          "id": 703,
          "name": "Frozen Chicken",
          "price": 600,
          "currency": "PKR",
          "description": "Frozen whole chicken.",
          "quantity": "1 kg"
        }
      ]
    },
    {
      "id": 8,
      "name": "Grains and Cereals",
      "items": [
        {
          "id": 801,
          "name": "Rice",
          "price": 150,
          "currency": "PKR",
          "description": "Basmati rice.",
          "quantity": "1 kg"
        },
        {
          "id": 802,
          "name": "Oats",
          "price": 200,
          "currency": "PKR",
          "description": "Rolled oats.",
          "quantity": "500 grams"
        },
        {
          "id": 803,
          "name": "Flour",
          "price": 80,
          "currency": "PKR",
          "description": "Wheat flour.",
          "quantity": "1 kg"
        }
      ]
    }
  
  ];

  const CategoryPress = (category) => {
    navigation.navigate('DetailsScreen1', { items: category.items });
  };

  return (
    <View>
      <Text style={styles.title}>Shop Now</Text>
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => CategoryPress(item)} style={styles.category}>
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    /></View>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 15,
    backgroundColor: '#ff6347',
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff4500',
    textAlign: 'center',
    marginVertical: 16,
  },
  categoryText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  }
});

export default HomeScreen1;
