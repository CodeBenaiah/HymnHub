import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import SongDetails from "./SongDetails.jsx"; // Import the common SongDetails component
import styles from "../assets/styles/styles.js";

// Import the JSON data
const data = require("../assets/data.json");

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
  });

  const [view, setView] = useState("books"); // 'books', 'songs', or 'song'
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [songsData, setSongsData] = useState([]);
  const [songNumberKey, setSongNumberKey] = useState(null); // Dynamic key for song number

  useEffect(() => {
    if (selectedBook && data[selectedBook]) {
      setSongsData(data[selectedBook]);
      // Dynamically set the key for song number from the first entry of the selected book
      if (data[selectedBook].length > 0) {
        const firstEntry = data[selectedBook][0];
        const keys = Object.keys(firstEntry);
        setSongNumberKey(
          keys.find((key) => !["Title", "Link / Audio", "Lyrics"].includes(key))
        );
      }
      setView("songs"); // Automatically switch to 'songs' view when a book is selected
    }
  }, [selectedBook]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const handleBookSelect = (bookName) => {
    setSelectedBook(bookName);
    setSelectedSong(null); // Clear selected song when switching books
  };

  const handleSongSelect = (song) => {
    setSelectedSong(song);
    setView("song");
  };

  const renderBooks = () => (
    <View style={styles.books_container}>
      {/* Add the "Available Books" text */}
      <Text style={styles.availableBooksText}>Books</Text>

      <FlatList
        data={Object.keys(data)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleBookSelect(item)}
          >
            <Text style={styles.cardTitle}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );

  const renderSongs = () => (
    <View style={styles.books_container}>
      <FlatList
        data={songsData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSongSelect(item)}
          >
            <View style={styles.songInfo}>
              {songNumberKey && (
                <Text style={styles.songNumber}>
                  Song No: {item[songNumberKey]}
                </Text>
              )}
              <Text style={styles.listTitle}>{item.Title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item[songNumberKey]?.toString() || item.Title}
      />
    </View>
  );

  return (
    <View style={styles.safeContainer}>
      {view === "books" && renderBooks()}
      {view === "songs" && renderSongs()}
      {view === "song" && selectedSong && songNumberKey && (
        <SongDetails
          selectedSong={selectedSong}
          selectedBook={selectedBook}
          songNumberKey={songNumberKey}
        />
      )}
    </View>
  );
}
