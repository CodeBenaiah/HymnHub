// src/screens/FavouritesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const favouriteSongs = [
    // array of favorite songs
];

const FavouritesScreen = ({ navigation }) => {
    const renderFavouriteItem = ({ item }) => (
        <Text style={styles.songItem} onPress={() => navigation.navigate('Lyrics', { song: item })}>
            {item.title}
        </Text>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={favouriteSongs}
                renderItem={renderFavouriteItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.favouritesList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    favouritesList: {
        padding: 10,
    },
    songItem: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default FavouritesScreen;
