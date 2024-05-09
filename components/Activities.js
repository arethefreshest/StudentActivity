import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {Calendar } from "../Calender"

function Activities({ route }) {
    const { peopleRange, priceRange, location } = route.params;
    const [activities, setActivities] = useState([]);

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
    );
}

export default Activities;
