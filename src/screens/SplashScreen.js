// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000); // 2 seconds delay before navigating to HomeScreen
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>HymnHub</Text>
            <Text style={styles.tagline}>Your Ultimate Christian Songbook</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 18,
        color: '#555',
    },
});

export default SplashScreen;
