import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "../assets/styles/styles.js"; // Ensure the path is correct

const SongDetails = ({
  selectedSong,
  selectedBook,
  songNumberKey,
  songsData,
  currentSongIndex,
  onSongSelect,
}) => {
  if (!selectedSong || !songNumberKey) {
    return null;
  }

  // Function to render only the current song number and adjacent ones
  const renderSongNumberScroll = () => {
    const totalSongs = songsData.length;
    const numbersToShow = [];

    // Show current song, previous song, and next song (if available)
    for (let i = -3; i <= 3; i++) {
      const songIndex = currentSongIndex + i;
      if (songIndex >= 0 && songIndex < totalSongs) {
        numbersToShow.push(songsData[songIndex]);
      }
    }

    return (
      <View style={styles.songDetailsNumberScrollContainer}>
        <FlatList
          data={numbersToShow}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item[songNumberKey].toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.songDetailsNumberItem,
                currentSongIndex === index &&
                  styles.songDetailsCurrentNumberItem,
              ]}
              onPress={() => onSongSelect(songsData.indexOf(item))}
            >
              <Text
                style={[
                  styles.songDetailsNumberText,
                  currentSongIndex === songsData.indexOf(item) &&
                    styles.songDetailsCurrentNumberText,
                ]}
              >
                {item[songNumberKey].toString()}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.safeContainer}>
      {/* Display the Book Name and Song Number */}
      <Text style={styles.songDetailsTitle}>
        {selectedBook}: {selectedSong[songNumberKey]}
      </Text>
      {/* Display the Lyrics */}
      <ScrollView style={styles.songDetailsLyricsContainer}>
        <Text style={styles.songDetailsLyricsText}>{selectedSong.Lyrics}</Text>
      </ScrollView>
    </View>
  );
};

export default SongDetails;
