import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "../../assets/styles/styles"; // Adjust path as necessary
const data = require("../../assets/data.json"); // Assuming your songbook data is stored here.

export default function BookScreen() {
  const { book } = useLocalSearchParams(); // Get the selected book name from route params
  const [songs, setSongs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Load songs from the selected book
    if (book && data[book]) {
      setSongs(data[book]);
    }
  }, [book]);

  // If no book or songs, return an error or loading
  if (!book || songs.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text>No songs available for this book</Text>
      </View>
    );
  }

  // Render each song in the songbook
  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() =>
        router.push(`/songDetails?book=${book}&songNumber=${item.Number}`)
      }
    >
      <Text style={styles.songNumber}>{item.Number}</Text>
      <Text style={styles.songTitle}>{item.Title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.bookTitle}>{book}</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.Number.toString()}
        renderItem={renderSongItem}
      />
    </View>
  );
}
