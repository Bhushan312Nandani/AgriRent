import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ViewPosts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const snapshot = await firestore().collection('posts').get();
        const postsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsList);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Error', error.message);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() =>
              navigation.navigate('PostDetails', {
                post: item,
              })
            }
          >
            <Image source={{ uri: item.Image }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});

export default ViewPosts;
