// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (text) => {
        setQuery(text);
        // Perform search logic here and update results
    };

    const renderResultItem = ({ item }) => (
        <Text style={styles.resultItem} onPress={() => navigation.navigate('Lyrics', { song: item })}>
            {item.title}
        </Text>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search for a song..."
                value={query}
                onChangeText={handleSearch}
            />
            <FlatList
                data={results}
                renderItem={renderResultItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.resultsList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchInput: {
        fontSize: 18,
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
    },
    resultsList: {
        padding: 10,
    },
    resultItem: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default SearchScreen;
