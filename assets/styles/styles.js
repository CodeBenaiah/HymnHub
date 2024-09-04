import { StyleSheet } from 'react-native';

const commonColors = {
    background: "#222831",
    cardBackground: "#31363F",
    textPrimary: "#EEE",
    textSecondary: "#DDD",
    borderColor: "#31363F",
    linkColor: "#76ABAE",
    activeIconColor: "#76ABAE",
};

const commonFonts = {
    titleFont: "BebasNeue",
    headerFont: "Poppins",
    bodyFont: "Poppins_Light",

};

const commonStyles = {
    container: {
        flex: 1,
        backgroundColor: commonColors.background,
    },
    textPrimary: {
        color: commonColors.textPrimary,
        fontFamily: commonFonts.bodyFont,
    },
    textSecondary: {
        color: commonColors.textSecondary,
        fontFamily: commonFonts.bodyFont,
    },
    card: {
        backgroundColor: commonColors.cardBackground,
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
};

const styles = StyleSheet.create({

    // Container Styles
    safeContainer: {
        ...commonStyles.container,
    },
    container: {
        ...commonStyles.container,
    },
    loadingContainer: {
        ...commonStyles.container,
        justifyContent: "center",
        alignItems: "center",
    },

    // Splash Screen Styles
    splash_container: {
        ...commonStyles.container,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 250,
    },
    splash_title: {
        fontSize: 52,
        fontFamily: commonFonts.titleFont,
        color: commonColors.textPrimary,
    },
    splash_subtitle: {
        fontSize: 18,
        fontFamily: commonFonts.bodyFont,
        color: commonColors.textPrimary,
    },

    // Layout Styles
    header: {
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: commonColors.borderColor,
    },
    title: {
        fontSize: 45,
        fontFamily: commonFonts.titleFont,
        color: commonColors.textPrimary,
    },
    subtitle: {
        fontSize: 12,
        fontFamily: commonFonts.bodyFont,
        color: commonColors.textPrimary,
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: commonColors.borderColor,
        backgroundColor: commonColors.background,
    },
    iconContainer: {
        alignItems: "center",
    },
    icon: {
        width: 27,
        height: 27,
        tintColor: commonColors.textPrimary,
    },
    activeIcon: {
        tintColor: commonColors.activeIconColor,
    },
    label: {
        fontSize: 12,
        marginTop: 5,
        color: commonColors.textPrimary,
        fontFamily: commonFonts.bodyFont,
    },

    // Tabs Styles
    availableBooksText: {
        fontSize: 24,
        fontFamily: commonFonts.headerFont,
        color: commonColors.textPrimary,
        marginBottom: 10,
        padding: 10,

    },
    books_container: {
        ...commonStyles.container,
        padding: 10,
    },
    card: {
        ...commonStyles.card,
    },
    cardTitle: {
        fontSize: 18,
        ...commonStyles.textPrimary,
    },
    cardSubtitle: {
        fontSize: 14,
        ...commonStyles.textSecondary,
    },
    songTitle: {
        fontSize: 20,
        ...commonStyles.textPrimary,
        marginBottom: 10,
    },
    songInfo: {
        flexDirection: "column",
    },
    listTitle: {
        fontSize: 16,
        ...commonStyles.textPrimary,
        marginBottom: 5,
    },
    songDetail: {
        fontSize: 14,
        ...commonStyles.textSecondary,
    },

    lyrics_songNumber: {
        fontSize: 24,
        ...commonStyles.textPrimary,
    },
    bookTitle: {
        fontSize: 18,
        ...commonStyles.textPrimary,
        marginBottom: 10,
    },
    songNumber: {
        fontSize: 16,
        ...commonStyles.textPrimary,
        marginBottom: 5,
    },

    //Coming Soon
    comingSoonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#182026", // Main background color
    },
    comingSoonText: {
        fontSize: 32,
        fontFamily: "Poppins_Bold",
        color: "#ffffff",
        marginBottom: 10,
    },
    comingSoonSubText: {
        fontSize: 18,
        fontFamily: "Poppins_Light",
        color: "#aaa",
    },

    //SongDetails
    detailsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10, // Add some vertical padding
    },
    lyrics_bookTitle: {
        fontSize: 22,
        color: "#fff",
        marginBottom: 5,
        fontFamily: "Poppins_Bold", // Use the bold font for titles
    },
    lyrics_key: {
        fontSize: 18,
        color: "#ddd",
        marginBottom: 10,
        fontFamily: "Poppins", // Use a regular font for the key
    },
    link: {
        fontSize: 16,
        color: "#76ABAE",
        marginBottom: 15,
        fontFamily: "Poppins", // Use the regular font for links
    },
    lyrics: {
        fontSize: 18,
        color: "#eee",
        marginTop: 10,
        fontFamily: "Poppins_Light", // Use a lighter font for lyrics
    },

    //SearchTab

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        height: 55,
        borderColor: "#444",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 18,
        color: "#ffffff", // Text color inside input
        fontFamily: "Poppins",
    },
    filterIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
    hymnItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#444",
    },
    hymnNumber: {
        fontSize: 18,
        fontFamily: "Poppins",
        color: "#ffffff",
        width: 40,
    },
    hymnTitle: {
        fontSize: 18,
        fontFamily: "Poppins",
        color: "#ffffff",
    },
    bookName: {
        fontSize: 14,
        fontFamily: "Poppins_Light",
        color: "#bbb",
    },
});

export default styles;
