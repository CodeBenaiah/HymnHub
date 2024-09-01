// src/screens/LanguageScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const languages = ['English', 'Spanish', 'French']; // Add more as needed

const LanguageScreen = () => {
    return (
        <View style={styles.container}>
            {languages.map((language, index) => (
                <TouchableOpacity key={index} style={styles.languageItem}>
                    <Text style={styles.languageText}>{language}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    languageItem: {
        padding: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
    },
    languageText: {
        fontSize: 18,
    },
});

export default LanguageScreen;
