import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    logo: {
        width: 150,        // Adjust width to desired size
        height: 150,       // Adjust height to desired size
        marginBottom: 20,  // Space between logo and input box
    },
    InputBox: {
        alignItems: 'center',
        padding: 10,
        alignItems: 'center',
    },
    InputLabel: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        width: '90%', 
        height: 50, 
        backgroundColor: '#fff',
        fontSize: 19, 
        marginBottom: 5,
        paddingLeft: 15,
        marginTop: 10
    },
    ButtonLabel: {
        paddingVertical: 20, // Increase the vertical padding for more height
        paddingHorizontal: 50, // Increase the horizontal padding for more width
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center', // Ensures text is centered
        borderColor: 'white',
        borderWidth: 2,
        width: 300, // Increase the width of the button
        marginHorizontal: 'auto',
        cursor: 'pointer',
    },
    
    ButtonText: {
        fontSize: 26, // Increase the font size to make the text bigger
        color: 'purple', // Button text color
  //      fontWeight: 'bold',
        textAlign: 'center', // Center the text inside the button
    },
    BackGround: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center',
        backgroundColor: 'white',
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333', // Title color
    },
});

export default LoginStyle;
