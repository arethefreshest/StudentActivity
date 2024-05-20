import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import GradientScreen from "../ui/GradientScreen";
import { styles } from '../../styles';

function ActivityFilter({ navigation }) {
    const [people, setPeople] = useState(5);
    const [price, setPrice] = useState(500);
    const [location, setLocation] = useState('krs');

    const handlePeopleChange = (value) => {
        setPeople(value);
    };

    const handlePriceChange = (value) => {
        setPrice(value);
    };

    const handleTypeChange = (itemValue, itemIndex) => {
        setLocation(itemValue.toLowerCase());
    };

    const applyFilters = () => {
        console.log("Applying filters with:", {people, price, location});
        navigation.navigate('Activities', {people, price, location});
    };

    return (
        <GradientScreen style={styles.activityFilterGradientScreen}>
            <SafeAreaView style={styles.activityFilterSafeArea}>
                <View style={styles.activityFilterContainer}>
                    <Text style={styles.activityFilterLabel}>Deltakere:</Text>
                    <Slider
                        style={styles.activityFilterSlider}
                        minimumValue={1}
                        maximumValue={10}
                        step={1}
                        value={people}
                        onValueChange={setPeople}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.activityFilterValue}>{people} personer</Text>

                    <Text style={styles.activityFilterLabel}>Pris:</Text>
                    <Slider
                        style={styles.activityFilterSlider}
                        minimumValue={0}
                        maximumValue={1000}
                        step={50}
                        value={price}
                        onValueChange={setPrice}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.activityFilterValue}>Maks {price}kr</Text>

                    <Text style={styles.activityFilterLabel}>Sted:</Text>
                    <Picker
                        selectedValue={location}
                        onValueChange={setLocation}
                        style={styles.activityFilterPicker}
                        itemStyle={styles.activityFilterPickerItem}
                    >
                        <Picker.Item label="Grimstad" value="grm"/>
                        <Picker.Item label="Kristiansand" value="krs"/>
                    </Picker>
                    <TouchableOpacity style={styles.activityFilterButton} onPress={applyFilters}>
                        <Text style={styles.activityFilterButtonText}>SØK</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default ActivityFilter;
