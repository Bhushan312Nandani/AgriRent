import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

function UserPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidPassword = (password) => password.length >= 6;

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        if (!isValidPassword(password)) {
            Alert.alert('Error', 'Password must be at least 6 characters');
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password,
        };

        const url = 'http://192.168.43.161:3000/test';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.warn(data);

            // Modify this to check for a successful response status
            if (response.status === 200 || response.status === 201) {
                Alert.alert('Success', 'User signed up successfully!');
                navigation.navigate('LoginUser'); // Navigate to LoginUser page
            } else {
                Alert.alert('Error', 'Signup failed, try again.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User SignUp</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your Name"
                placeholderTextColor="grey"
                keyboardType="default"
            />

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
                placeholderTextColor="grey"
                placeholder="Enter your password"
                secureTextEntry
            />

            <Button style={styles.button} title="Sign-Up" onPress={handleSignUp} />

            <TouchableOpacity onPress={() => navigation.navigate('LoginUser')}>
                <Text style={styles.label}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default UserPage;

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
    button: {
        marginTop: 25,
    },
});
