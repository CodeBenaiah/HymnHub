// components/SongDetails.jsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "../assets/styles/styles.js"; // Ensure the path is correct

const SongDetails = ({ selectedSong, selectedBook, songNumberKey }) => {
  if (!selectedSong || !songNumberKey) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        {/* Display the Book Name and Song Number */}
        <Text style={styles.lyrics_bookTitle}>
          {selectedBook}: {selectedSong[songNumberKey]}
        </Text>

        {/* Display the Key if available */}
        {selectedSong.Key && (
          <Text style={styles.lyrics_key}>{selectedSong.Key}</Text>
        )}

        {/* Display the Audio Link */}
        {selectedSong["Link / Audio"] && (
          <TouchableOpacity
            onPress={() => Linking.openURL(selectedSong["Link / Audio"])}
          >
            <Text style={styles.link}>Listen to Song</Text>
          </TouchableOpacity>
        )}

        {/* Display the Lyrics */}
        <Text style={styles.lyrics}>{selectedSong.Lyrics}</Text>
      </View>
    </ScrollView>
  );
};

export default SongDetails;
