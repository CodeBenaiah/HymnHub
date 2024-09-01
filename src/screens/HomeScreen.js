// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import IconButton from '../components/IconButton';
import BookBlock from '../components/BookBlock';
import { books } from '../../data/hymns.json'; // Importing the books data

const HomeScreen = () => {
    const renderBookItem = ({ item }) => (
        <BookBlock title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>HymnHub</Text>
                <Text style={styles.tagline}>Your Ultimate Christian Songbook</Text>
            </View>
            <FlatList
                data={books}
                renderItem={renderBookItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.bookList}
            />
            <View style={styles.menu}>
                <IconButton iconName="book" label="Books" />
                <IconButton iconName="language" label="Language" />
                <IconButton iconName="search" label="Search" />
                <IconButton iconName="author" label="Author" />
                <IconButton iconName="star" label="Favourites" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 16,
        color: '#555',
    },
    bookList: {
        padding: 10,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
});

export default HomeScreen;
