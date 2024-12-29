import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
// import Swiper from 'react-native-swiper';

const CategoryDetail = ({ route, navigation }) => {
  const { item } = route.params;

  const imageSlider = [
    { id: 1, url: item.img },  
    { id: 2, url: require('./assets/loader.jpg') },  
    { id: 3, url: require('./assets/tractorr.jpg') },  
  ];
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={item.img} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.detailText}>
          This is a detailed description of the {item.name}. It includes information about its features, specifications, and any other relevant details that may interest potential buyers. Make sure to highlight what makes this item unique and worth considering!
        </Text>

        <View style={styles.reviewContainer}>
          <Text style={styles.price}>Price:</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={styles.reviewContainer}>
          <Text style={styles.location}>Location: </Text>
          <Text style={styles.location}>{item.machineLocation}</Text>
        </View>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>Reviews:</Text>
          <Text style={{ color: 'orange', fontSize: 18, marginLeft: 10 }}>{item.review}</Text>
        </View>
        {/* <View style={styles.sliderContainer}>
          <Swiper
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={3}
            style={styles.swiper}
            dotColor="white"
            activeDotColor="red"
          >
            {imageSlider.map(image => (
              <View key={image.id} style={styles.slide}>
                <Image source={image.url} style={styles.sliderImage} />
              </View>
            ))}
          </Swiper>
        </View> */}
      </View>

      <TouchableOpacity style={styles.bookBtn} onPress={() => navigation.navigate("PaymentPage")}>
        <Text style={styles.bookTxt}>Book now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 20,
    color: '#666',
    marginBottom: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewStars: {
    fontSize: 25,
    color: '#ff5722',
    marginTop: 5,
  },
  reviewText: {
    fontSize: 16,
    color: '#ff5722',
    marginTop: 10,
  },
  sliderContainer: {
    marginTop: 20,
    height: 200,
  },
  swiper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bookBtn: {
    height: 50,
    backgroundColor: '#28a745',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom:30,
    marginHorizontal: 10,
  },
  bookTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: '#F5F5F5',
  },
});

export default CategoryDetail;
