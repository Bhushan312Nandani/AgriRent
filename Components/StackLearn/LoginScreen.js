import * as React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import LoginStyle from './StyleSheets/LoginStyle';
import { LinearGradient } from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);  // New state for loading indicator
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

  const handleLoginBtn = async () => {
    setLoading(true);  // Show loading indicator
    try {
      // await auth().signInWithEmailAndPassword(email, password);
      setTimeout(() => {
        Alert.alert('Success', 'Logged in successfully!');
        navigation.navigate("Home", { name: email, email: email });  // Pass email as a param if needed
      }, 1000);  // Simulate a 1-second delay before navigating
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);  // Hide loading indicator
    }
  };

  const handleSignUpBtn = async () => {
    setLoading(true);  // Show loading indicator
    try {
      // Simulate a 1-second delay for sign-up process
      setTimeout(() => {
        Alert.alert('Success', 'Sign up successful!');
        navigation.navigate("Home", { name: email, email: email });  // Pass email as a param if needed
      }, 1000);  // Simulate 1-second delay
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);  // Hide loading indicator
    }
  };

  return (
    <View style={LoginStyle.BackGround}>
      <View style={{ marginTop: 200, alignItems: 'center', justifyContent: 'center' }}>
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
        <>
          <View style={LoginStyle.ButtonLabel}>
            <LinearGradient
              colors={['#0000FF', '#FF0000', '#FFFF00', '#00FF00', '#808080']}
              start={{ x: 0, y: 4 }}
              end={{ x: 2, y: 3 }}
              style={{ borderRadius: 30, width: '100%', alignItems: 'center' }}
            >
              <TouchableOpacity onPress={() => { navigation.navigate("Signup"); }}>
                <Text style={LoginStyle.ButtonText}>SignUp</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={LoginStyle.ButtonLabel}>
            <LinearGradient
              colors={['#0000FF', '#FF0000', '#FFFF00', '#00FF00', '#808080']}
              start={{ x: 0, y: 4 }}
              end={{ x: 2, y: 3 }}
              style={{ borderRadius: 30, width: '100%', alignItems: 'center' }}
            >
              <TouchableOpacity onPress={handleLoginBtn}>
                <Text style={LoginStyle.ButtonText}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </>
      )}
    </View>
  );
};

export default LoginScreen;
