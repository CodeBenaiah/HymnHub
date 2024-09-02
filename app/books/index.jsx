import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

// Import the JSON data
const data = require("../../assets/data.json");

export default function BooksIndex() {
  const [fontsLoaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
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
    <View style={styles.container}>
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
    <View style={styles.container}>
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
        keyExtractor={(item) => item[songNumberKey].toString()}
      />
    </View>
  );

  const renderSongDetails = () => (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        {selectedSong && songNumberKey && (
          <>
            <Text style={styles.songNumber}>
              Song No: {selectedSong[songNumberKey]}
            </Text>
            <Text style={styles.bookTitle}>Book: {selectedBook}</Text>
            <Text style={styles.songTitle}>{selectedSong.Title}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(selectedSong["Link / Audio"])}
            >
              <Text style={styles.link}>Listen</Text>
            </TouchableOpacity>
            <Text style={styles.lyrics}>{selectedSong.Lyrics}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.safeContainer}>
      {view === "books" && renderBooks()}
      {view === "songs" && renderSongs()}
      {view === "song" && renderSongDetails()}
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#182026",
  },
  container: {
    flex: 1,
    backgroundColor: "#182026",
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#182026",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2c3e50",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
  cardSubtitle: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#cccccc",
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  bookTitle: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#ffffff",
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#eee",
  },
  songNumber: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#ffffff",
    marginBottom: 5,
  },
  songTitle: {
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#ffffff",
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#1e90ff",
    marginBottom: 10,
  },
  lyrics: {
    fontSize: 1,
    fontFamily: "Roboto",
    color: "#ffffff",
  },
});
