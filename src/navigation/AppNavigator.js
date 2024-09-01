// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import LyricsScreen from '../screens/LyricsScreen';
import SearchScreen from '../screens/SearchScreen';
import LanguageScreen from '../screens/LanguageScreen';
import AuthorScreen from '../screens/AuthorScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Book" component={BookScreen} />
                <Stack.Screen name="Lyrics" component={LyricsScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Language" component={LanguageScreen} />
                <Stack.Screen name="Author" component={AuthorScreen} />
                <Stack.Screen name="Favourites" component={FavouritesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
