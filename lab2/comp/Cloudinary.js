import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, Image, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/do7drez5p/upload'; // Your Cloudinary URL
const UPLOAD_PRESET = 'Unsigned_preset'; // Your unsigned preset

const Cloudinary = () => {
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [fileType, setFileType] = useState('');

  const uploadToCloudinary = async (file) => {
    try {
      setUploading(true);

      // Create FormData for Cloudinary
      const data = new FormData();
      data.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
      data.append('upload_preset', UPLOAD_PRESET);

      // Upload file to Cloudinary using fetch
      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const result = await response.json();
      setUploading(false);

      if (response.ok) {
        return { url: result.secure_url, type: file.type.split('/')[0] }; // Public URL and type
      } else {
        Alert.alert('Upload failed', result.error.message || 'Unknown error');
        return null;
      }
    } catch (error) {
      setUploading(false);
      Alert.alert('Upload failed', error.message);
      return null;
    }
  };

  const saveToFirestore = async (url) => {
    try {
      await firestore().collection('files').add({
        url,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Success', 'File URL saved to Firestore');
    } catch (error) {
      Alert.alert('Error saving URL', error.message);
    }
  };

  const handleFileUpload = async () => {
    try {
      // Pick a file using Document Picker
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images, DocumentPicker.types.video],
      });

      const uploadedFile = await uploadToCloudinary(file);
      if (uploadedFile) {
        setFileUrl(uploadedFile.url);
        setFileType(uploadedFile.type);
        await saveToFirestore(uploadedFile.url);
      }
    } catch (error) {
      if (!DocumentPicker.isCancel(error)) {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      {uploading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Upload File" onPress={handleFileUpload} />
      )}
      {fileUrl ? (
        <View style={styles.previewContainer}>
          {fileType === 'image' ? (
            <Image source={{ uri: fileUrl }} style={styles.previewImage} />
          ) : fileType === 'video' ? (
            <Text style={styles.videoText}>
              Video uploaded successfully. Open the URL in a browser to view it.
            </Text>
          ) : null}
          <Text style={styles.urlText}>URL: {fileUrl}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  videoText: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
  urlText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Cloudinary;
