import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dyah52hpv/upload'; // Your Cloudinary URL
const UPLOAD_PRESET = 'unsigned_preset'; // Your unsigned preset

const UploadScreen = () => {
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const isMounted = useRef(true); // Ref to track mounting

  useEffect(() => {
    isMounted.current = true; // Component is mounted
    return () => {
      isMounted.current = false; // Component is unmounted
    };
  }, []);

  const uploadToCloudinary = async (file) => {
    try {
      setUploading(true);

      const data = new FormData();
      data.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
      data.append('upload_preset', UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const result = await response.json();
      setUploading(false);

      if (response.ok) {
        return result.secure_url;
      } else {
        if (isMounted.current) {
          Alert.alert('Upload failed', result.error.message || 'Unknown error');
        }
        return null;
      }
    } catch (error) {
      setUploading(false);
      if (isMounted.current) {
        Alert.alert('Upload failed', error.message);
      }
      return null;
    }
  };

  const saveToFirestore = async (imageUrl) => {
    try {
      await firestore().collection('posts').add({
        Post_Title: title,
        Post_Description: description,
        Image: imageUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      if (isMounted.current) {
        Alert.alert('Success', 'Post added successfully!');
      }
    } catch (error) {
      if (isMounted.current) {
        Alert.alert('Error saving post', error.message);
      }
    }
  };

  const handleFileUpload = async () => {
    try {
      if (!title || !description) {
        if (isMounted.current) {
          Alert.alert('Error', 'Please provide a title and description.');
        }
        return;
      }

      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });

      const uploadedUrl = await uploadToCloudinary(file);
      if (uploadedUrl) {
        setFileUrl(uploadedUrl);
        await saveToFirestore(uploadedUrl);
      }
    } catch (error) {
      if (!DocumentPicker.isCancel(error)) {
        if (isMounted.current) {
          Alert.alert('Error', error.message);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      {uploading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Post Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Post Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />
          <Button title="Upload File" onPress={handleFileUpload} />
        </>
      )}
      {fileUrl && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: fileUrl }} style={styles.previewImage} />
          <Text style={styles.urlText}>Uploaded Image URL: {fileUrl}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  urlText: {
    fontSize: 14,
    color: '#555',
  },
});

export default UploadScreen;
