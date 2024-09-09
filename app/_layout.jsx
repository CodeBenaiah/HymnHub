import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Link, usePathname, useRouter } from "expo-router"; // Import useRouter
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import styles from "../assets/styles/styles.js";

// Import your custom icons
const homeIcon = require("../assets/images/home.png");
const searchIcon = require("../assets/images/search.png");
const settingsIcon = require("../assets/images/settings.png");

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const pathname = usePathname(); // To get the current path
  const router = useRouter(); // Use router if needed for programmatic navigation

  // If fonts are not loaded, display a loading indicator
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  // Conditionally render the header based on route
  const shouldShowHeader = pathname !== "/splash";

  // Conditionally render the bottom navigation based on route
  const shouldShowNavigation = pathname !== "/splash";

  return (
    <SafeAreaView style={styles.safeContainer}>
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
