import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import GradientScreen from "./GradientScreen";

function ActivityFilter({ navigation }) {
    const [people, setPeople] = useState(5);
    const [price, setPrice] = useState(500);
    const [location, setLocation] = useState('grm');

    const handlePeopleChange = (value) => {
        setPeople(value);
    };
    const handlePriceChange = (value) => {
        setPrice(value);
    };
    const handleTypeChange = (itemValue, itemIndex) => {
        setLocation(itemValue);
    };
    const applyFilters = () => {
        console.log("Applying filters with:", { people, price, location });
        navigation.navigate('Activities', { people, price, location });
    };

    return (
        <GradientScreen>
            <View style={{ width: 200 }}>
                <View style={{ width: 200, padding: 10 }}>
                    <Text>Antall personer</Text>
                    <Slider minimumValue={0} maximumValue={10} step={1} value={people} onValueChange={handlePeopleChange}/>
                    <Text>{people} personer</Text>
                </View>
                <View style={{ width: 200, padding: 10 }}>
                    <Text>Pris</Text>
                    <Slider minimumValue={0} maximumValue={1000} step={50} value={price} onValueChange={handlePriceChange}/>
                    <Text>Maks {price}kr</Text>
                </View>
                <View style={{ width: 200, padding: 10 }}>
                    <Text>Campus</Text>
                    <Picker selectedValue={location} onValueChange={handleTypeChange}>
                        <Picker.Item label="Grimstad" value="grm" />
                        <Picker.Item label="Kristiansand" value="krs" />
                    </Picker>
                </View>
                <Button title="Apply Filters" onPress={applyFilters}/>
            </View>
        </GradientScreen>
    );
}

export default ActivityFilter;
