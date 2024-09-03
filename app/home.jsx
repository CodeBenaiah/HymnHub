import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePathname } from "expo-router";

export default function HomeScreen() {
  const pathname = usePathname();

  return <SafeAreaView style={styles.safeContainer}></SafeAreaView>;
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#182026",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 45,
    fontFamily: "BebasNeue", // Bebas Neue font for HymnHub
    color: "#ffffff", // White text color
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto", // Roboto font for subtitle
    color: "#ffffff", // White text color
  },
  content: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    padding: 15,
    backgroundColor: "#444", // Card background color
    marginBottom: 15,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Roboto", // Roboto font for card titles
    color: "#ffffff", // White text color
  },
});
