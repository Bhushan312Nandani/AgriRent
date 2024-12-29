import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function ViewPostScreen() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  // Fetch all posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsSnapshot = await firestore().collection('Posts').get();
        const postsList = postsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsList);
      } catch (error) {
        console.error('Error fetching posts: ', error);
        Alert.alert('Error', 'Failed to load posts.');
      }
    };

    fetchPosts();
  }, []);

  // Handle post click (navigate to post details or interact)
  const handlePostClick = (postId) => {
    navigation.navigate('PostDetailScreen', { postId });
  };

  // Render each post item
  const renderPostItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postItem}
      onPress={() => handlePostClick(item.id)}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{item.content.slice(0, 100)}...</Text>
      <Text style={styles.postAuthor}>By: {item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>All Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  postContent: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  postAuthor: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});
