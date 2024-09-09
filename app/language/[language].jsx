import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

const LanguageScreen = () => {
  const route = useRoute();
  const { selectedLanguage } = route.params; // Get the selected language from route params

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch the songs of the selected language from your data
    const filteredSongs = allSongs.filter(
      (song) => song.Language === selectedLanguage
    );
    setSongs(filteredSongs);
  }, [selectedLanguage]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {selectedLanguage}
      </Text>
      <FlatList
        data={songs}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item[songNumberKey]} {item.Title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item[songNumberKey].toString()}
      />
    </View>
  );
};

export default LanguageScreen;
