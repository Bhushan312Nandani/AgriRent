import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const NotificationPage = () => {
  // Dummy notifications data
  const notifications = [
    {
      id: '1',
      title: 'New Message',
      description: 'You have received a new message from John.',
      date: '2024-11-14 10:00 AM',
      icon: 'https://via.placeholder.com/30/0000FF/808080?Text=Message', // Placeholder image URL
    },
    {
      id: '2',
      title: 'Profile Update',
      description: 'Your profile has been successfully updated.',
      date: '2024-11-13 2:00 PM',
      icon: 'https://via.placeholder.com/30/FF0000/FFFFFF?Text=Profile',
    },
    {
      id: '3',
      title: 'Order Placed',
      description: 'Your order #12345 has been placed successfully.',
      date: '2024-11-12 4:30 PM',
      icon: 'https://via.placeholder.com/30/00FF00/FFFFFF?Text=Order',
    },
    {
      id: '4',
      title: 'App Update Available',
      description: 'A new version of the app is available for download.',
      date: '2024-11-11 6:00 PM',
      icon: 'https://via.placeholder.com/30/FFA500/FFFFFF?Text=Update',
    },
    // Add more notifications here as needed
  ];

  // Render each notification item
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      {/* Notification Icon */}
      <Image source={{ uri: item.icon }} style={styles.notificationIcon} />
      
      {/* Notification Content */}
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

// Styles for Notification Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  notificationList: {
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationPage;
