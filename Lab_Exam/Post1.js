import React, { useEffect, useState } from 'react';
import { View, Text, Alert, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Post1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUserId = '123'; // Replace with the logged-in user's ID from Firebase Auth

  // Fetch posts from Firestore
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .onSnapshot((querySnapshot) => {
        const fetchedPosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(fetchedPosts);
        setLoading(false);
      });

    return () => unsubscribe(); // Unsubscribe from Firestore updates when the component unmounts
  }, []);

  // Handle delete post
  const deletePost = (postId) => {
    Alert.alert(
      'Delete Post',
      'Are you sure you want to delete this post?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await firestore().collection('posts').doc(postId).delete();
              Alert.alert('Success', 'Post deleted successfully!');
            } catch (error) {
              console.error('Error deleting post:', error);
              Alert.alert('Error', 'Failed to delete the post.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderPost = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      }}
    >
      <Text>{item.content}</Text>
      {item.userId === currentUserId && (
        <TouchableOpacity onPress={() => deletePost(item.id)}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={renderPost}
    />
  );
};

export default Post1;
