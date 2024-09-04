import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import SongDetails from "../SongDetails.jsx"; // Import the SongDetails component
import data from "../../assets/data.json"; // Import the JSON data
import styles from "../../assets/styles/styles.js";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState(null); // State to store selected song
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Poppins_Light: require("../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#ffffff" />; // Show a loading indicator while fonts are loading
  }

  // Filter the hymns based on the search query
  const filteredHymns = Object.keys(data)
    .flatMap((bookName) =>
      data[bookName].map((hymn) => ({
        ...hymn,
        bookName,
      }))
    )
    .filter(
      (hymn) =>
        hymn.Title.toLowerCase().includes(query.toLowerCase()) ||
        hymn.Lyrics.toLowerCase().includes(query.toLowerCase())
    );

  const handleSongSelect = (song) => {
    setSelectedSong(song); // Set the selected song
  };

  const renderSearchResults = () => (
    <FlatList
      data={filteredHymns}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleSongSelect(item)}>
          <View style={styles.hymnItem}>
            {/* If the hymn has a number, display it; otherwise, show a placeholder */}
            <Text style={styles.hymnNumber}>{item.Number || "?"}.</Text>
            <View>
              <Text style={styles.hymnTitle}>{item.Title}</Text>
              <Text style={styles.bookName}>{item.bookName}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search hymns..."
          placeholderTextColor="#aaa"
          value={query}
          onChangeText={setQuery}
        />
        <Image
          source={require("../../assets/images/filter.png")} // Ensure this path is correct
          style={styles.filterIcon}
        />
      </View>
      {selectedSong ? (
        <SongDetails
          selectedSong={selectedSong}
          selectedBook={selectedSong.bookName}
          songNumberKey={Object.keys(selectedSong).find(
            (key) =>
              !["Title", "Link / Audio", "Lyrics", "bookName"].includes(key)
          )}
        />
      ) : (
        renderSearchResults()
      )}
    </View>
  );
}
