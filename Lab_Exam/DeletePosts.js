import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const DeletePosts = () => {
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

  const deletePost = async (postId) => {
    try {
      await firestore().collection('posts').doc(postId).delete();
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      Alert.alert('Success', 'Post deleted successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.title}>{item.Post_Title}</Text>
            <Text style={styles.description}>{item.Post_Description}</Text>
            <Button
              title="Delete"
              color="red"
              onPress={() => deletePost(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});

export default DeletePosts;
