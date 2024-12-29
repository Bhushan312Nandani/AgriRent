import * as React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import LoginStyle from './StyleSheets/LoginStyle';
import { LinearGradient } from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false); // Loading state for the sign-up process
  const [logoUrl, setLogoUrl] = React.useState(''); // State for logo URL

  React.useEffect(() => {
    const fetchLogoUrl = async () => {
      try {
        const snapshot = await firestore().collection('files').limit(1).get();
        if (!snapshot.empty) {
          const fileData = snapshot.docs[0].data();
          setLogoUrl(fileData.url);
        }
      } catch (error) {
        console.error('Error fetching logo URL:', error);
        Alert.alert('Error', 'Unable to load logo.');
      }
    };

    fetchLogoUrl();
  }, []);

  const validateFields = () => {
    if (!name || !phoneNumber || !email || !password) {
      Alert.alert('Error', 'Please fill all the fields.');
      return false;
    }
    return true;
  };

  const checkIfEmailOrPhoneExists = async () => {
    try {
      const emailSnapshot = await firestore()
        .collection('Users')
        .where('email', '==', email)
        .get();

      const phoneSnapshot = await firestore()
        .collection('Users')
        .where('phone', '==', phoneNumber)
        .get();

      if (!emailSnapshot.empty || !phoneSnapshot.empty) {
        Alert.alert('Error', 'This email or phone number is already registered. Please use a different one.');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking email or phone existence:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      return false;
    }
  };

  const handleSignUp = async () => {
    if (validateFields()) {
      setLoading(true);

      const exists = await checkIfEmailOrPhoneExists();
      if (!exists) {
        try {
          await auth().createUserWithEmailAndPassword(email, password);

          await firestore().collection('Users').add({
            name: name,
            email: email,
            password: password,
            phone: phoneNumber,
            panelType: "Customer",
            createdAt: firestore.FieldValue.serverTimestamp(),
          });

          Alert.alert('Success', 'User registered successfully!');
          navigation.navigate('Login');
        } catch (error) {
          console.error(error);
          Alert.alert('Error', error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <View style={LoginStyle.BackGround}>
      <View style={{ marginTop: 120, alignItems: 'center', justifyContent: 'center' }}>
        {logoUrl ? (
          <Image
            source={{ uri: logoUrl }}
            style={LoginStyle.logo}
            resizeMode="contain"
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>

      <View style={LoginStyle.InputBox}>
        <TextInput
          style={LoginStyle.InputLabel}
          placeholder="Enter your Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={LoginStyle.InputLabel}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={LoginStyle.InputLabel}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={LoginStyle.InputLabel}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      {loading ? (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={LoginStyle.ButtonLabel}>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={LoginStyle.ButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        

        
      )}
    </View>
    
  );
};

export default SignUpScreen;
