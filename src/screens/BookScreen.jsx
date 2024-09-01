// src/screens/BookScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const BookScreen = ({ navigation }) => {
    const route = useRoute();
    const { book } = route.params;

    const renderSongItem = ({ item }) => (
        <Text style={styles.songItem} onPress={() => navigation.navigate('Lyrics', { song: item })}>
            {item.number}. {item.title}
        </Text>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <FlatList
                data={book.songs}
                renderItem={renderSongItem}
                keyExtractor={(item) => item.number.toString()}
                contentContainerStyle={styles.songList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    bookTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    songList: {
        padding: 10,
    },
    songItem: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default BookScreen;
