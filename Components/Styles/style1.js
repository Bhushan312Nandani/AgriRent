import { StyleSheet } from "react-native";

 const styles = StyleSheet.create(
    {
        text:
        {
            fontSize:50,
            borderWidth:1,
            borderColor:'black',
            margin:10,
    },
    button:
    {
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        padding: 20,
        backgroundColor: 'lightgray', // Change this to whatever color you prefer
        borderRadius: 10, // Optional: for rounded corners
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '80%',
        marginBottom: 20,
      },
      label: {
        fontSize: 18,
        marginBottom: 10,
      },
}

)

export default styles;