import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { styles } from '../../styles'; // Assuming you have a separate styles.js file

const CustomPicker = ({ items, selectedItems, onSelect, onRemove }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.pickerWrapper}>
            <TouchableOpacity onPress={toggleOpen} style={styles.labelContainerActivities}>
                <Text style={styles.labelActivities}>Venner</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownActivities}>
                    <ScrollView>
                        {items.map((friend, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => selectedItems.includes(friend) ? onRemove(friend) : onSelect(friend)}
                                style={selectedItems.includes(friend) ? styles.selectedItemActivities : styles.itemActivities}
                            >
                                <Text style={styles.labelPicker}>{friend.fullName}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default CustomPicker;