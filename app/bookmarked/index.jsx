import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import styles from "../../assets/styles/styles.js";

export default function AuthorsScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Handle font loading
  }

  return (
    <View style={styles.splash_container}>
      <Text style={styles.comingSoonText}>Bookmark Page</Text>
      <Text style={styles.comingSoonSubText}>Coming Soon</Text>
    </View>
  );
}
