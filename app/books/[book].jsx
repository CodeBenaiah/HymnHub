import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import SongDetails from "../SongDetails.jsx"; // Import the SongDetails component
import styles from "../../assets/styles/styles"; // Adjust the path if necessary
const data = require("../../assets/data.json"); // Assuming your songbook data is stored here.

export default function BookScreen() {
  const { book } = useLocalSearchParams(); // Get the selected book name from route params
  const [view, setView] = useState("songs"); // Set the default view to "songs"
  const [selectedSong, setSelectedSong] = useState(null); // Track the selected song
  const [songsData, setSongsData] = useState([]); // Store the songs from the selected book
  const [songNumberKey, setSongNumberKey] = useState(null); // Dynamic key for song number
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track current song index
  const [isSortedByNumber, setIsSortedByNumber] = useState(true); // Track sorting state (number or title)

  const [fontsLoaded] = useFonts({
    Poppins_Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  // Fetch songs from the selected book
  useEffect(() => {
    if (book && data[book]) {
      let songs = data[book];
      setSongsData(songs);
      // Dynamically determine the song number key
      if (songs.length > 0) {
        const firstEntry = songs[0];
        const keys = Object.keys(firstEntry);
        setSongNumberKey(
          keys.find((key) => !["Title", "Link / Audio", "Lyrics"].includes(key))
        );
      }
    }
  }, [book]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // Handle song selection and switch to song details view
  const handleSongSelect = (song) => {
    setSelectedSong(song);
    setCurrentSongIndex(songsData.indexOf(song));
    setView("song");
  };

  // Toggle sort by number or by title
  const handleSortToggle = () => {
    setIsSortedByNumber(!isSortedByNumber);
    let sortedData = [...songsData];
    if (isSortedByNumber) {
      // Sort by Title
      sortedData.sort((a, b) => a.Title.localeCompare(b.Title));
    } else {
      // Sort by Song Number
      sortedData.sort((a, b) => a[songNumberKey] - b[songNumberKey]);
    }
    setSongsData(sortedData);
  };

  // Render the list of songs
  const renderSongs = () => (
    <View style={styles.books_container}>
      <FlatList
        data={songsData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.booksCard}
            onPress={() => handleSongSelect(item)}
          >
            <View style={styles.songInfo}>
              {songNumberKey && (
                <View style={styles.songNumberContainer}>
                  <Text style={styles.songNumber}>
                    {item[songNumberKey].toString().padStart(2, "0")}
                  </Text>
                </View>
              )}
              <View style={styles.titleContainer}>
                <Text
                  style={styles.listTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.Title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item[songNumberKey]?.toString() || item.Title}
      />
    </View>
  );

  return (
    <View style={styles.safeContainer}>
      {view === "songs" && (
        <View style={styles.roundedTopContainer}>
          <View style={styles.booksHeader}>
            {/* Title and Sort Icon in the Header */}
            <Text style={styles.bookTitle}>{book}</Text>
            <Pressable onPress={handleSortToggle}>
              <Image
                source={require("../../assets/images/sort.png")}
                style={styles.sortIcon}
              />
            </Pressable>
          </View>
          {renderSongs()}
        </View>
      )}
      {view === "song" && selectedSong && songNumberKey && (
        <SongDetails
          selectedSong={selectedSong}
          selectedBook={book}
          songNumberKey={songNumberKey}
          songsData={songsData}
          currentSongIndex={currentSongIndex}
          onSongSelect={(index) => {
            setSelectedSong(songsData[index]);
            setCurrentSongIndex(index);
          }}
        />
      )}
    </View>
  );
}
