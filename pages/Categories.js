import { View } from "react-native";
import HomePage from "./HomePage";

const Categories = ({route}) => {
    const categories = [
        {
            id: 1,
            name: 'Tractors',
            tractorsList: [
                {
                    id: 1,
                    name: 'Tractor',
                    brand: 'John Deere',
                    model: '5055E',
                    year: 2020,
                    horsepower: 55,
                    location: 'Farm A',
                    features: [
                        '4WD',
                        'Hydraulic lift',
                        'PTO',
                        'Cab with AC',
                        'Loader attachment'
                    ],
                    specifications: {
                        weight: '1500 kg',
                        fuelType: 'Diesel',
                        transmission: 'Manual',
                        tireSize: '12.4-24',
                        warranty: '2 years'
                    }
                },
                {
                    id: 2,
                    name: 'Tractor',
                    brand: 'Kubota',
                    model: 'L3901',
                    year: 2021,
                    horsepower: 39,
                    location: 'Farm B',
                    features: [
                        '4WD',
                        'Hydraulic lift',
                        'PTO',
                        'Open station',
                        'Loader attachment'
                    ],
                    specifications: {
                        weight: '1300 kg',
                        fuelType: 'Diesel',
                        transmission: 'Hydrostatic',
                        tireSize: '11.2-24',
                        warranty: '3 years'
                    }
                },
                {
                    id: 3,
                    name: 'Tractor',
                    brand: 'Case IH',
                    model: 'Farmall 75C',
                    year: 2019,
                    horsepower: 75,
                    location: 'Farm C',
                    features: [
                        '4WD',
                        'Cab with heat and AC',
                        'Loader attachment',
                        'Rear hydraulic',
                        'Bluetooth radio'
                    ],
                    specifications: {
                        weight: '1600 kg',
                        fuelType: 'Diesel',
                        transmission: 'Power Shuttle',
                        tireSize: '12.4-28',
                        warranty: '2 years'
                    }
                }
            ]
        },
        {
            id: 2,
            name: 'Thresher',
            location: 'MPK',
            model: '2022'
        },
        {
            id: 3,
            name: 'Keyloader',
            location: 'Ukot',
            model: '2021'
        },
        {
            id: 4,
            name: 'Keyloader',
            location: 'Ukot',
            model: '2021'
        },
        {
            id: 5,
            name: 'Keyloader',
            location: 'Ukot',
            model: '2021'
        }
    ];
    console.warn(categories);

    return (<View><HomePage categories={categories} /></View>)
}
// Example: Accessing the list of tractors
export default Categories;