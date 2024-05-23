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


    const applyFilters = () => {
        console.log("Applying filters with:", { people, price, location });
        navigation.navigate('Activities', { people, price, location });
    };

    return (
        <GradientScreen>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.containerFilter}>
                    <Text style={styles.labelFilter}>Deltakere:</Text>
                    <Slider
                        style={styles.sliderFilter}
                        minimumValue={1}
                        maximumValue={10}
                        step={1}
                        value={people}
                        onValueChange={setPeople}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.valueFilter}>{people} personer</Text>

                    <Text style={styles.labelFilter}>Pris:</Text>
                    <Slider
                        style={styles.sliderFilter}
                        minimumValue={0}
                        maximumValue={1000}
                        step={50}
                        value={price}
                        onValueChange={setPrice}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Text style={styles.valueFilter}>Maks {price}kr</Text>

                    <Text style={styles.labelFilter}>Sted:</Text>
                    <Picker
                        selectedValue={location}
                        onValueChange={setLocation}
                        style={styles.pickerFilter}
                        itemStyle={styles.pickerItemFilter}
                    >
                        <Picker.Item label="Grimstad" value="grm" />
                        <Picker.Item label="Kristiansand" value="krs" />
                    </Picker>
                    <TouchableOpacity style={styles.buttonFilter} onPress={applyFilters}>
                        <Text style={styles.buttonTextFilter}>SØK</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GradientScreen>
    );
}

export default ActivityFilter;
