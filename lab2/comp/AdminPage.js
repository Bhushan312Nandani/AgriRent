import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

function AdminPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const Email = 'usama@gmail.com';
        const Password = '12345';

        if (email === Email && password === Password) {
            navigation.navigate('Home1');
        } else {
            Alert.alert('Login Failed', 'Incorrect email or password');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Page</Text>

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

            <Button style={styles.button} title="Login" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.label}>Not an account? Sign up now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AdminPage;

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
        color:'black',
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
