import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

    const handleSignUpBtn = ()=> {

            navigation.navigate("Signup");  // Pass email as a param if neede
      };
  return (




    <View style={styles.container}>


    <TouchableOpacity onPress={()=>navigation.navigate('Post')} >
    <Text style={styles.ButtonText} >View Post</Text>

    </TouchableOpacity>


    <TouchableOpacity onPress={()=>navigation.navigate('Upload')}>
    <Text style={styles.ButtonText}>Add posts </Text>
        
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>navigation.navigate('Post1')}>
    <Text style={styles.ButtonText} >Delete posts</Text>
        
    </TouchableOpacity>
    



    <TouchableOpacity onPress={handleSignUpBtn} >
    <Text style={styles.ButtonText}  >Logout posts</Text>
        
    </TouchableOpacity>





    </View>
  )
}

export default HomeScreen


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          marginBottom:1,
        },
        propertyContainer: {
          marginBottom: 15,
          alignItems: 'center',
        },
        image: {
          width: '100%',
          height: 200,
          borderRadius: 10,
        },
        propertyName: {
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 5,
        },

        ButtonText: {
            fontSize: 26, // Increase the font size to make the text bigger
            color: 'purple', // Button text color
      //      fontWeight: 'bold',
            textAlign: 'center', // Center the text inside the button
        },
      });