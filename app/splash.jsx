import React, { useEffect, useRef } from "react";
import { Text, Animated } from "react-native";
import { useRouter } from "expo-router";
import styles from "../assets/styles/styles.js";

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity of 1

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 750, // Duration of fade-out effect
      useNativeDriver: true,
    }).start(() => {
      router.replace("/home"); // Navigate to home screen after fade-out
    });
  }, [fadeAnim, router]);

  return (
    <Animated.View style={[styles.splash_container, { opacity: fadeAnim }]}>
      <Text style={styles.splash_title}>HymnHub</Text>
      <Text style={styles.splash_subtitle}>Hub for Christian Songs</Text>
    </Animated.View>
  );
}
