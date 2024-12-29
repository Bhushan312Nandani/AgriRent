import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

function Select({ navigation }) {

    
    const handleUserLogin = () => {
        navigation.navigate('UserPage'); 
    };

  
    const handleAdminLogin = () => {
        navigation.navigate('AdminPage'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select One</Text>

         
            <Button
                title="Login as User"
                onPress={handleUserLogin}
                style={styles.button}
            />

          
            <Button
                title="Login as Admin"
                onPress={handleAdminLogin}
                style={styles.button}
            />

            
        </View>
    );
}

export default Select;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333333',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        marginBottom: 5,
        color: 'orange',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        padding:20,
        margin:50,
    },
});
