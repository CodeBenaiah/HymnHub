import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const commonColors = {
    background: "#FFFFFF",
    headerBackground: "#0D1B2A",
    cardBackground: "#F5F5F5",
    textPrimary: "#1B263B",
    textSecondary: "#415A77",
    borderColor: "#E0E0E0",
    linkColor: "#76ABAE",
    activeIconColor: "#0D1B2A",
    inactiveIconColor: "#808080",
    navBackground: "#FAFAFA",
};

const commonFonts = {
    boldFont: "Poppins_Bold",
    semiBoldFont: "Poppins_SemiBold",
    regularFont: "Poppins_Regular",
};

const commonStyles = {
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        padding: 20,
    },
    roundedBody: {
        backgroundColor: commonColors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    textPrimary: {
        color: commonColors.textPrimary,
        fontFamily: commonFonts.regularFont,
    },
    textSecondary: {
        color: commonColors.textSecondary,
        fontFamily: commonFonts.regularFont,
    },
    card: {
        backgroundColor: commonColors.cardBackground,
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: commonColors.background,
    },
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    roundedTopContainer: {
        ...commonStyles.roundedBody,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: -25,
    },

    carouselContainer: {
        marginBottom: 20,
    },
    // Top Header styles
    header: {
        backgroundColor: commonColors.headerBackground,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: commonFonts.boldFont,
        fontSize: 32,
        color: commonColors.background,
    },
    // Bottom Navigation styles
    navigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: commonColors.navBackground,
        paddingVertical: 8,
        borderTopColor: commonColors.borderColor,
    },
    iconContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: commonColors.inactiveIconColor, // Grey color for inactive state
    },
    activeIcon: {
        tintColor: commonColors.activeIconColor, // Active color
    },
    label: {
        fontFamily: commonFonts.regularFont,
        fontSize: 12,
        color: commonColors.inactiveIconColor, // Grey color for inactive state
        marginTop: 4,
    },
    activeLabel: {
        color: commonColors.activeIconColor, // Active color
    },

    sectionContainer: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontFamily: commonFonts.boldFont,
        fontSize: 20,
        marginBottom: -4,
    },
    sectionSubtitle: {
        fontFamily: commonFonts.regularFont,
        fontSize: 14,
        color: commonColors.textSecondary,
        marginBottom: 15,
    },
    homeCard: {
        width: screenWidth * 0.4,
        height: 120,
        borderRadius: 15,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 10,
        marginRight: 15,
    },
    homeCardTitle: {
        fontFamily: commonFonts.boldFont,
        fontSize: 16,
        color: commonColors.textPrimary,
    },

    // Cards for content sections
    cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%",
        height: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: commonColors.cardBackground,
    },
    cardTitle: {
        fontFamily: commonFonts.boldFont,
        fontSize: 16,
        color: commonColors.textPrimary,
    },

    // Splash Screen Styles
    splash_container: {
        ...commonStyles.container,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 250,
    },
    splash_title: {
        fontSize: 40,
        fontFamily: commonFonts.boldFont,
        color: commonColors.textPrimary,
        marginBottom: -15,
    },
    splash_subtitle: {
        fontSize: 17,
        fontFamily: commonFonts.regularFont,
        color: commonColors.textPrimary,
    },

    // Search Tab
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        paddingBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 55,
        borderColor: commonColors.borderColor,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 18,
        color: commonColors.textPrimary,
        fontFamily: commonFonts.regularFont,
    },
    filterIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
        tintColor: commonColors.activeIconColor,
    },
    hymnItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: commonColors.borderColor,
    },
    hymnNumber: {
        fontSize: 18,
        fontFamily: commonFonts.regularFont,
        color: commonColors.textPrimary,
        width: 40,
    },
    hymnTitle: {
        fontSize: 18,
        fontFamily: commonFonts.regularFont,
        color: commonColors.textPrimary,
    },
    bookName: {
        fontSize: 14,
        fontFamily: commonFonts.regularFont,
        color: commonColors.textSecondary,
    },

    // Filter Styles
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        padding: 20,
        backgroundColor: commonColors.cardBackground,
        borderRadius: 10,
        alignItems: "flex-start",
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: commonFonts.semiBoldFont,
        color: commonColors.textPrimary,
    },
    filterCategory: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: commonFonts.semiBoldFont,
        color: commonColors.textPrimary,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    switchLabel: {
        marginRight: 10,
        fontFamily: commonFonts.regularFont,
        color: commonColors.textPrimary,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%',
    },

    // Books
    booksHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 20,
    },
    bookTitle: {
        fontSize: 24,
        fontFamily: commonFonts.boldFont,
    },
    sortIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
        tintColor: commonColors.activeIconColor,
    },
    books_container: {
        flex: 1,
    },
    booksCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    songInfo: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
    },
    songNumberContainer: {
        width: screenWidth * 0.15,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    songNumber: {
        fontFamily: commonFonts.boldFont,
        fontSize: 16,
        color: "#000",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    listTitle: {
        fontFamily: commonFonts.regularFont,
        fontSize: 16,
        color: "#555",
        flexShrink: 1,
    },

    // Unique scroll container for song numbers
    songDetailsNumberScrollContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
    },
    songDetailsNumberItem: {
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 8,
    },
    songDetailsNumberText: {
        fontFamily: commonFonts.regularFont,
        fontSize: 16,
        color: commonColors.textPrimary,
    },
    songDetailsCurrentNumberText: {
        fontFamily: commonFonts.boldFont,
        color: commonColors.activeIconColor,
    },

    // Unique Title styles
    songDetailsTitle: {
        fontFamily: commonFonts.boldFont,
        fontSize: 20,
        color: "#333",
        textAlign: "center",
        marginVertical: 10,
    },

    // Unique Audio link styles
    songDetailsAudioLinkContainer: {
        marginVertical: 10,
        alignItems: "center",
    },
    songDetailsAudioLinkText: {
        fontFamily: commonFonts.regularFont,
        fontSize: 16,
        color: "#42A5F5",
    },

    // Unique Lyrics container
    songDetailsLyricsContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    songDetailsLyricsText: {
        fontFamily: commonFonts.regularFont,
        fontSize: 18,
        lineHeight: 24,
        color: "#333",
    },

    //settings page

});
export default styles;
