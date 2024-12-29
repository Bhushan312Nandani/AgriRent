import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ActivityIndicator, Button } from "react-native";
import Toast from 'react-native-toast-message';
const PaymentPage = ({ navigation }) => {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [accountNumber, setAccountNumber] = useState("");
    const [easyPaisaNumber, setEasyPaisaNumber] = useState("");


    const handlePayment = () => {
        if (paymentMethod === "EasyPaisa") {
            Alert.alert("Payment Successful", `Paid via EasyPaisa: ${easyPaisaNumber}`, [
                { text: "OK", onPress: () => navigation.navigate("Home") },
            ]);
        } else if (paymentMethod === "Bank") {
            Alert.alert("Payment Successful", `Paid via Bank Account: ${accountNumber}`, [
                { text: "OK", onPress: () => navigation.navigate("Home") },
            ]);
        } else if (paymentMethod === "Cash") {
            Alert.alert("Thank you", "Cash payment will be provided", [
                { text: "OK", onPress: () => navigation.navigate("Home") },
            ]);
        } else {
            Alert.alert("Error", "Please select a payment method.");
        }
    };

    const showToast = () => {
        if (paymentMethod) {
            Toast.show({
                text1: 'Congratulations',
                text2: 'Payment has been submitted successfully!',
                type: 'success',
                position: 'top',
                visibilityTime: 4000,
            });
            setTimeout(() => navigation.navigate('Home'), 4000);
        } else {
            Alert.alert("Error", "Please select a payment method.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Methods</Text>

            <View style={styles.paymentOption}>
                <TouchableOpacity
                    style={[styles.button, paymentMethod === "EasyPaisa" && styles.selectedButton]}
                    onPress={() => {
                        setPaymentMethod("EasyPaisa");
                        setAccountNumber("");
                        setEasyPaisaNumber("");
                    }}
                >
                    <Text style={styles.buttonText}>Pay with EasyPaisa</Text>
                </TouchableOpacity>
                {paymentMethod === "EasyPaisa" && (
                    <TextInput
                        style={styles.input}
                        placeholder="Enter EasyPaisa Number"
                        value={easyPaisaNumber}
                        onChangeText={setEasyPaisaNumber}
                        keyboardType="phone-pad"
                    />
                )}
            </View>

            <View style={styles.paymentOption}>
                <TouchableOpacity
                    style={[styles.button, paymentMethod === "Bank" && styles.selectedButton]}
                    onPress={() => {
                        setPaymentMethod("Bank");
                        setAccountNumber("");
                        setEasyPaisaNumber("");
                    }}
                >
                    <Text style={styles.buttonText}>Pay with Bank Account</Text>
                </TouchableOpacity>
                {paymentMethod === "Bank" && (
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Bank Account Number"
                        value={accountNumber}
                        onChangeText={setAccountNumber}
                        keyboardType="numeric"
                    />
                )}
            </View>

            <View style={styles.paymentOption}>
                <TouchableOpacity
                    style={[styles.button, paymentMethod === "Cash" && styles.selectedButton]}
                    onPress={() => {
                        setPaymentMethod("Cash");
                        setAccountNumber("");
                        setEasyPaisaNumber("");
                    }}
                >
                    {paymentMethod === 'Cash' ? (<Text style={styles.buttonText}>Selected</Text>) : <Text style={styles.buttonText}>Pay with Cash</Text>}
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={showToast}>
                <Text style={styles.submitButtonText}>Submit Payment</Text>
            </TouchableOpacity>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            {/* <Button title="Sonner" onPress={()=>navigation.navigate('Sonner')}/> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    paymentOption: {
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: '#0056b3',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PaymentPage;