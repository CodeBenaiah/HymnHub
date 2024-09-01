// src/components/IconButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome icons

const IconButton = ({ iconName, label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={iconName} size={24} color="#555" />
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 4,
    },
});

export default IconButton;
