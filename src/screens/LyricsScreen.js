// src/screens/LyricsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const LyricsScreen = () => {
    const route = useRoute();
    const { song } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.lyrics}>{song.lyrics}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lyrics: {
        fontSize: 18,
        lineHeight: 26,
    },
});

export default LyricsScreen;
