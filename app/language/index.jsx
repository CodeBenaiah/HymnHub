import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import SongDetails from "../SongDetails.jsx"; // Import SongDetails component
import styles from "../../assets/styles/styles.js";

// Import the JSON data
const data = require("../../assets/data.json");

export default function LanguageIndex() {
  const [fontsLoaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-Regular.ttf"),
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const [view, setView] = useState("languages"); // 'languages', 'songs', or 'song'
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [songsData, setSongsData] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [songNumberKey, setSongNumberKey] = useState(null); // Key for song number
  const [bookKey, setBookKey] = useState(null); // Key for song book

  useEffect(() => {
    // Extract all songs from the data
    const songs = Object.values(data).flat();
    setAllSongs(songs);

    // Dynamically set the key for song number and book from the first entry
    if (songs.length > 0) {
      const firstEntry = songs[0];
      const keys = Object.keys(firstEntry);
      setSongNumberKey(
        keys.find(
          (key) =>
            ![
              "Title",
              "Link / Audio",
              "Lyrics",
              "Language",
              "Song Book",
            ].includes(key)
        )
      );
      setBookKey("Song Book"); // Assuming 'Song Book' is the key for song book
    }
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      const filteredSongs = allSongs
        .filter((song) => song.Language === selectedLanguage)
        .sort((a, b) => a.Title.localeCompare(b.Title));
      setSongsData(filteredSongs);
      setView("songs"); // Automatically switch to 'songs' view when a language is selected
    }
  }, [selectedLanguage]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleSongSelect = (song) => {
    setSelectedSong(song);
    setView("song");
  };

  const renderLanguages = () => {
    // Extract unique languages from all songs
    const languages = [...new Set(allSongs.map((song) => song.Language))];

    return (
      <View style={styles.books_container}>
        <Text style={styles.availableBooksText}>Languages</Text>
        <FlatList
          data={languages}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleLanguageSelect(item)}
            >
              <Text style={styles.cardTitle}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };

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
              <Text style={styles.listTitle}>{item.Title}</Text>
              {songNumberKey && (
                <Text style={styles.songDetail}>
                  {item[bookKey]} - {item[songNumberKey]}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) =>
          `${item.Title}-${item[songNumberKey]}-${item[bookKey]}`
        } // Updated keyExtractor
      />
    </View>
  );

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.safeContainer}>
      {view === "languages" && renderLanguages()}
      {view === "songs" && renderSongs()}
      {view === "song" && selectedSong && songNumberKey && bookKey && (
        <SongDetails
          selectedSong={selectedSong}
          selectedBook={selectedSong[bookKey]}
          songNumberKey={songNumberKey}
        />
      )}
    </View>
  );
}
