import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostDetails = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.Image }} style={styles.image} />
      <Text style={styles.title}>{post.Post_Title}</Text>
      <Text style={styles.description}>{post.Post_Description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default PostDetails;
