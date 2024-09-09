import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Link, usePathname } from "expo-router"; // Import useRouter if needed
import { useFonts } from "expo-font";
import styles from "../assets/styles/styles.js";

// Import your custom icons
const homeIcon = require("../assets/images/home.png");
const searchIcon = require("../assets/images/search.png");
const settingsIcon = require("../assets/images/settings.png");
const booksIcon = require("../assets/images/books.png"); // New icon
const languagesIcon = require("../assets/images/language.png"); // New icon

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const pathname = usePathname(); // To get the current path

  // If fonts are not loaded, display a loading indicator
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // Conditionally render the header and bottom navigation based on route
  const shouldShowHeader = pathname !== "/splash";
  const shouldShowNavigation = pathname !== "/splash";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        barStyle="light-content" // Change to "dark-content" if you have a light background
        backgroundColor={
          shouldShowHeader ? styles.header.backgroundColor : "transparent"
        } // Ensure the status bar background color matches the header or app's theme
      />
      <View style={styles.container}>
        {/* Header */}
        {shouldShowHeader && (
          <View style={styles.header}>
            <Text style={styles.title}>HymnHub</Text>
          </View>
        )}

        {/* Main content slot */}
        <Slot />

        {/* Bottom navigation */}
        {shouldShowNavigation && (
          <View style={styles.navigation}>
            <Link href="/home" asChild>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={homeIcon}
                  style={[
                    styles.icon,
                    pathname === "/home" && styles.activeIcon, // Highlight active icon
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    pathname === "/home" && styles.activeLabel, // Highlight active label
                  ]}
                >
                  Home
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/books" asChild>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={booksIcon}
                  style={[
                    styles.icon,
                    pathname === "/books" && styles.activeIcon, // Highlight active icon
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    pathname === "/books" && styles.activeLabel, // Highlight active label
                  ]}
                >
                  Books
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/search" asChild>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={searchIcon}
                  style={[
                    styles.icon,
                    pathname === "/search" && styles.activeIcon, // Highlight active icon
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    pathname === "/search" && styles.activeLabel, // Highlight active label
                  ]}
                >
                  Search
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/language" asChild>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={languagesIcon}
                  style={[
                    styles.icon,
                    pathname === "/language" && styles.activeIcon, // Highlight active icon
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    pathname === "/language" && styles.activeLabel, // Highlight active label
                  ]}
                >
                  Languages
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/settings" asChild>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={settingsIcon}
                  style={[
                    styles.icon,
                    pathname === "/settings" && styles.activeIcon, // Highlight active icon
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    pathname === "/settings" && styles.activeLabel, // Highlight active label
                  ]}
                >
                  Settings
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
