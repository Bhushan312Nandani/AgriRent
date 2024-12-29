import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const categoriesData = {
  "categories": [
    {
        "type": "Luxury",
        "properties": [
          {
            "id": 1,
            "name": "Seaside Villa",
            "owner": {
              "name": "John Doe",
              "phone": "+1234567890"
            },
            "address": "123 Beach Rd, Ocean City, CA, USA",
            "image_url": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          },
          {
            "id": 2,
            "name": "Skyline Penthouse",
            "owner": {
              "name": "Alice Cooper",
              "phone": "+1230984567"
            },
            "address": "456 Skyline Blvd, Los Angeles, CA, USA",
            "image_url": "https://images.unsplash.com/photo-1521747116042-5a810fda9664"
          },
          {
            "id": 3,
            "name": "Luxury Condo",
            "owner": {
              "name": "Sarah Lee",
              "phone": "+3344556677"
            },
            "address": "654 Luxury Ave, Miami, FL, USA",
            "image_url": "https://images.unsplash.com/photo-1591207403061-0c96bc32e29a"
          }
        ]
      },
      {
        "type": "Cozy",
        "properties": [
          {
            "id": 4,
            "name": "Mountain Cabin",
            "owner": {
              "name": "Jane Smith",
              "phone": "+0987654321"
            },
            "address": "456 Mountain View Dr, Aspen, CO, USA",
            "image_url": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          },
          {
            "id": 5,
            "name": "Lakefront Cottage",
            "owner": {
              "name": "Mark Wilson",
              "phone": "+2233445566"
            },
            "address": "789 Lake Rd, Big Bear, CA, USA",
            "image_url": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          }
        ]
      },
      {
        "type": "Modern",
        "properties": [
          {
            "id": 6,
            "name": "Urban Apartment",
            "owner": {
              "name": "Mike Johnson",
              "phone": "+1122334455"
            },
            "address": "789 City St, New York, NY, USA",
            "image_url": "https://images.unsplash.com/photo-1560457072-d2d905c913a3"
          },
          {
            "id": 7,
            "name": "Downtown Studio",
            "owner": {
              "name": "Emma Roberts",
              "phone": "+9988776655"
            },
            "address": "321 Downtown Ave, San Francisco, CA, USA",
            "image_url": "https://images.unsplash.com/photo-1549298896-8e23f477a3cc"
          }
        ]
      },
      {
        "type": "Rural",
        "properties": [
          {
            "id": 8,
            "name": "Countryside Farmhouse",
            "owner": {
              "name": "Emily Davis",
              "phone": "+2233445566"
            },
            "address": "321 Farm Rd, Rural Town, TX, USA",
            "image_url": "https://images.unsplash.com/photo-1519113661666-6f7f4318ffcb"
          },
          {
            "id": 9,
            "name": "Rustic Barn House",
            "owner": {
              "name": "David Green",
              "phone": "+5566778899"
            },
            "address": "234 Barn Ln, Hilltop, OH, USA",
            "image_url": "https://images.unsplash.com/photo-1562541701-6f7f5b740cc5"
          }
        ]
      },
      {
        "type": "Desert",
        "properties": [
          {
            "id": 10,
            "name": "Desert Retreat",
            "owner": {
              "name": "Tom Brown",
              "phone": "+4455667788"
            },
            "address": "987 Desert Dr, Palm Springs, CA, USA",
            "image_url": "https://images.unsplash.com/photo-1511914330457-75b6f600d0e7"
          },
          {
            "id": 11,
            "name": "Oasis Hideaway",
            "owner": {
              "name": "Liam Garcia",
              "phone": "+6677889900"
            },
            "address": "543 Oasis Way, Tucson, AZ, USA",
            "image_url": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          }
        ]
      },
      {
        "type": "Beachfront",
        "properties": [
          {
            "id": 12,
            "name": "Tropical Paradise",
            "owner": {
              "name": "Olivia Martinez",
              "phone": "+7788990011"
            },
            "address": "111 Ocean Blvd, Honolulu, HI, USA",
            "image_url": "https://images.unsplash.com/photo-1523037552266-b24d2724d244"
          },
          {
            "id": 13,
            "name": "Beachfront Bungalow",
            "owner": {
              "name": "Ethan Taylor",
              "phone": "+8899001122"
            },
            "address": "222 Sunset Ave, Malibu, CA, USA",
            "image_url": "https://images.unsplash.com/photo-1550348971-f20dbba91628"
          }
        ]
      },
      {
        "type": "Historic",
        "properties": [
          {
            "id": 14,
            "name": "Victorian Mansion",
            "owner": {
              "name": "Sophia Williams",
              "phone": "+9900112233"
            },
            "address": "333 Heritage St, Charleston, SC, USA",
            "image_url": "https://images.unsplash.com/photo-1530779195821-9c6a2e12c8c3"
          },
          {
            "id": 15,
            "name": "Ancient Castle",
            "owner": {
              "name": "James Anderson",
              "phone": "+1011121314"
            },
            "address": "444 Castle Rd, Edinburgh, UK",
            "image_url": "https://images.unsplash.com/photo-1498972418240-d8d4734c3297"
          }
        ]
      }
  ]
};

const CategorySection = ({navigation}) => {

  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <TouchableOpacity onPress={()=> {navigation.navigate("Home",{item})}}>
      <Text style={styles.categoryTitle}>{item.type}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
    <Text style={{color: 'gray', textAlign: 'center', fontSize: 30, marginVertical: 30}}>Category</Text>
    <ScrollView>

    
    <FlatList
      data={categoriesData.categories}
      renderItem={renderCategory}
      keyExtractor={(category) => category.type}
        numColumns={3}
    />
    </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 10,
    width: 130,
    marginHorizontal: 10
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  propertyContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
});

export default CategorySection;
