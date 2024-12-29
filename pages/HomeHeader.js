import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
const HomeHeader = ({ search, setSearch ,navigation}) => {
    // const [search, setSearch] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);


    return (
        <View style={styles.headerContainer}>
            <Image
                source={require('./assets/logo.jpg')}
                style={styles.logo}
            />
            <Text style={styles.headerTitle}>AgriRent</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Notification"); }}>
                <Image style={{ width: 25, height: 25 }} source={require('./assets/notification.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Profile"); }}>
                <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={require('./assets/profile.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 25,
        backgroundColor: '#fff',
    },
    logo: {
        width: 40,
        height: 40,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingHorizontal: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default HomeHeader;
