import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function Activities({ route }) {
    const { peopleRange, priceRange, location } = route.params;
    const [activities, setActivities] = useState([]);

    return (
        <View>
            <Text>HEI!</Text>
        </View>
    );
}

export default Activities;
