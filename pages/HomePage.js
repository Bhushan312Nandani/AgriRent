import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from './HomeHeader';

const HomePage = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [search, setSearch] = useState('');

    const imageSlider = [
        { id: 1, url: require('./assets/tractorr.jpg') },
        { id: 2, url: require('./assets/loader2.jpg') },
        { id: 3, url: require('./assets/excavator.png') },
    ];

    const categories = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Tractors' },
        { id: 3, name: 'Thresher' },
        { id: 4, name: 'Loaders' },
        { id: 5, name: 'Excavators' }, 
        { id: 6, name: 'Cranes' },     
        { id: 7, name: 'Plows' },       
        { id: 8, name: 'Harvesters' }, 
    ];

    const machineList = [
        {
            id: 1, img: require('./assets/tractorr.jpg'),
            name: "John Deere", category: "Tractors",
            price: "12000", machineLocation: "Ukot",
            review: '★★★★☆'
        },
        {
            id: 2, img: require('./assets/tractor.jpg'),
            name: "Kubota", category: "Tractors",
            price: "15000", machineLocation: "MPK",
            review: '★★★☆☆'
        },
        {
            id: 3, img: require('./assets/tractorr.jpg'),
            name: "Rosi", category: "Tractors",
            price: "10000", machineLocation: "Ukot",
            review: '★★★★★'
        },
        {
            id: 4, img: require('./assets/loader.jpg'),
            name: "Loader", category: "Loaders",
            price: "10000", machineLocation: "Ukot",
            review: '★★★☆☆'
        },
        {
            id: 5, img: require('./assets/equipment.jpg'),
            name: "Thresher Model 2022", category: "Thresher",
            price: "13000", machineLocation: "Ukot",
            review: '★★☆☆☆'
        },
        {
            id: 6, img: require('./assets/loader2.jpg'),
            name: "Loader", category: "Loaders",
            price: "12000", machineLocation: "MPK", review: '★★★★☆'
        },
        {
            id: 7, img: require('./assets/excavator.png'),
            name: "Excavator 2023", category: "Excavators",
            price: "25000", machineLocation: "MPK",
            review: '★★★★☆'
        },
        {
            id: 8, img: require('./assets/crane.jpg'),
            name: "Crane Model X", category: "Cranes",
            price: "30000", machineLocation: "MPK",
            review: '★★★★★'
        },
        {
            id: 9, img: require('./assets/plow.jpg'),
            name: "Heavy Duty Plow", category: "Plows",
            price: "8000", machineLocation: "Ukot",
            review: '★★★★☆'
        },
        {
            id: 10, img: require('./assets/harvester.jpg'),
            name: "Harvester Pro 2024", category: "Harvesters",
            price: "35000", machineLocation: "MPK",
            review: '★★★★☆'
        },
    ];


    const filteredMachineList = machineList.filter(machine =>
        (selectedCategory === 'All' || machine.category === selectedCategory) &&
        (machine.name.toLowerCase().includes(search.toLowerCase()))
    );

    const viewDetails = (item) => {
        navigation.navigate("CategoryDetail", { item });
    };

    const categoryList = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedCategory(item.name)}>
            <View style={[styles.category, {
                backgroundColor: selectedCategory === item.name
                    ? '#98FB98' : '#D4D4D4'
            }]}>
                <Text style={styles.categoryName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
    const machinesList = ({ item }) => (
        <TouchableOpacity onPress={() => viewDetails(item)}>
            <View style={styles.mList}>
                <Image style={styles.machineImg} source={item.img} />
                <View style={styles.machineDetails}>
                    <Text style={styles.machineName}>{item.name}</Text>
                    <Text style={styles.machinePrice}>Price: {item.price}</Text>
                    <Text style={{color:'black'}}>Location: {item.machineLocation}</Text>
                </View>
                <Text style={styles.mreview}>{item.review}</Text>
            </View>
        </TouchableOpacity>
    );

    const header = () => (
        <View>
            {/* <HomeHeader/> */}
            <TextInput
                placeholder='Search...'
                placeholderTextColor={'grey'}
                style={styles.input}
            />
            <View style={styles.equipments}>
                <Swiper
                    showsButtons={true}
                    autoplay={true}
                    autoplayTimeout={3}
                    style={styles.swiper}
                    dotColor='white'
                    activeDotColor='red'
                >
                    {imageSlider.map(image => (
                        <View key={image.id} style={styles.slide}>
                            <Image source={image.url} style={styles.image} />
                        </View>
                    ))}
                </Swiper>
            </View>

            <Text style={styles.textStyle}>Categories</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                renderItem={categoryList}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.textStyle}>Machine List</Text>
        </View>
    );
    return (
        <View style={{ marginHorizontal: 10, backgroundColor: '#fff' }}>
            <FlatList
                data={filteredMachineList}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={header}
                renderItem={machinesList}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.noDataText}>No machines available in this category.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    equipments: {
        height: 220,
    },
    input: {
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        letterSpacing: 2,
        borderColor: 'grey',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    category: {
        height: 50,
        width: 120,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 20,
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black',
    },
    categoryName: {
        fontSize: 17,
        color: '#333',
    },
    mList: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    machineImg: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    machineDetails: {
        marginLeft: 10,
        flex: 1,
    },
    machineName: {
        fontSize: 20,
        fontWeight: '600',
        color:'black'
    },
    machinePrice: {
        fontSize: 15,
        color:'black'
    },
    mreview: {
        fontSize: 25,
        marginRight: 10,
        color: 'orange',
    },
    noDataText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default HomePage;
