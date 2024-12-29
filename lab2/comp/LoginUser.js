import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

function LoginUser({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in both fields.');
            return;
        }

        
            const url = fetch('http://Localhost:3000/test');
        try{
            let response = await fetch(url,{
                method:'GET',
                headers:{"Content-Type":"application/json"},
            });
            if (response.ok) {
                const result = await response.json();
                console.log("Server resonce:",result);
            }

           const user = result.find(
            (user) => user.email === email && user.password === password);
           
        if(user){
            Alert.alert("Login Successful",`welcome, ${user.name}`);
            navigation.navigate('Home1')
        } else {
             
                Alert.alert('Login Failed', 'Incorrect email or password.');
            }

        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="grey"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="grey"
                secureTextEntry
            />

            <Button title="Login" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.label}>Not an account? Sign up now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginUser;

const styles = StyleSheet.create({
    title: {
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
        color: 'black',
    },
    label: {
        marginTop: 10,
        fontSize: 16,
        marginBottom: 5,
        color: 'orange',
    },
});
