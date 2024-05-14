import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import GradientScreen from '../components/GradientScreen';

export default function CalendarScreen() {
    return (
        <GradientScreen>
        <View style={styles.container}>
            <Text style={styles.title}>My Calendar</Text>
            <Calendar
                // Initially visible month. Default = now
                //current={'2024-05-09'}
                curent={'now'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {
                    console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If firstDay=1 week starts from Monday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {
                    console.log('month changed', month);
                }}
            />
        </View>
        </GradientScreen>
    );
}

const styles = StyleSheet.create({
    gradientScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});
