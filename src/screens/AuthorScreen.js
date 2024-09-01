// src/screens/AuthorScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const authors = [
    { id: 1, name: 'John Newton', songs: [/* array of songs by this author */] },
    // Add more authors
];

const AuthorScreen = ({ navigation }) => {
    const renderAuthorItem = ({ item }) => (
        <View>
            <Text style={styles.authorName}>{item.name}</Text>
            {item.songs.map((song) => (
                <Text
                    key={song.id}
                    style={styles.songItem}
                    onPress={() => navigation.navigate('Lyrics', { song })}
                >
                    {song.title}
                </Text>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={authors}
                renderItem={renderAuthorItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.authorList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    authorList: {
        padding: 10,
    },
    authorName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    songItem: {
        fontSize: 18,
        marginVertical: 5,
        paddingLeft: 10,
    },
});

export default AuthorScreen;
