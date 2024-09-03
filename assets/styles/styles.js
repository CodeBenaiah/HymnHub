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
    bodyFont: "Roboto",
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
        fontSize: 15,
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
        fontFamily: commonFonts.titleFont,
        color: commonColors.textPrimary,
        fontWeight: "bold",
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
    detailsContainer: {
        paddingHorizontal: 20,
    },
    lyrics_songNumber: {
        fontSize: 24,
        ...commonStyles.textPrimary,
    },
    lyrics_bookTitle: {
        fontSize: 22,
        ...commonStyles.textPrimary,
        marginBottom: 5,
    },
    link: {
        fontSize: 14,
        fontFamily: commonFonts.bodyFont,
        color: commonColors.linkColor,
        marginBottom: 15,
    },
    lyrics: {
        fontSize: 18,
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
});

export default styles;
