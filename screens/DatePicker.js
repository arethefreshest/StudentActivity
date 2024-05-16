/*

import DateTimePicker from '@react-native-community/datetimepicker';
import {useEffect, useState} from "react";
import {Button, SafeAreaView, Text} from "react-native";
import {styles} from "../styles";

export const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        onDateSelected(currentDate);
    };

    useEffect(() => {
        setShow(true); // Re-show the picker when the component is shown again
    }, []);


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView style={styles.container}>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    is24Hour={true}
                />
            )}
            <Text>Selected Date: {date.toLocaleDateString()}</Text>
        </SafeAreaView>
    );
};

export default DatePicker;


 */