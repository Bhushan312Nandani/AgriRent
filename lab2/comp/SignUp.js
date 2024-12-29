// screens/Home1.js
import React from 'react';
import { View, Text, Button ,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>SignUp</Text>
      <TextInput  style={styles.input}
       placeholder='Enter Your Name'
        placeholderTextColor="grey">

        </TextInput>
      <TextInput style={styles.input}
       placeholder='Enter Your Email'
        placeholderTextColor="grey">

        </TextInput>
      <TextInput style={styles.input}
       secureTextEntry={true} placeholder='Enter Your Password' 
       placeholderTextColor="grey"></TextInput>

      <Button title="SignUp" onPress={() => navigation.navigate('HomeScreen1')} />

      <TouchableOpacity onPress={() => navigation.navigate('Login') } >
            <Text style={styles.label}>Already Account? Login </Text>
            </TouchableOpacity>
    </View>
  );
};
const styles=StyleSheet.create({
text:
{
  fontSize:20,
  borderWidth:2,
  padding:10,
  margin:10,
},title: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: 'center',
  color: '#333333',
},
container: {
  flex: 1,
  justifyContent: 'center',
 padding: 20,
  backgroundColor: '#f5f5f5',
},
input: {
  height: 50,
  borderColor: '#cccccc',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 15,
  marginBottom: 20,
  fontSize: 16,
  
},
label: {
  marginTop:10,
  fontSize: 16,
  marginBottom: 5,
  color: 'orange',
},
button:{
  marginTop:25,
  
},
})

export default SignUp;
