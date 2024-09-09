import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("window").width;

const commonColors = {
    background: "#FFFFFF", // White background for the body
    headerBackground: "#0D1B2A", // Dark background for the header
    cardBackground: "#F5F5F5", // Light card background
    textPrimary: "#1B263B", // Black text for primary content
    textSecondary: "#415A77", // Secondary text color
    borderColor: "#E0E0E0", // Border color for elements
    linkColor: "#76ABAE", // Active link color
    activeIconColor: "#0D1B2A", // Active icon color
    inactiveIconColor: "#808080", // Grey color for inactive state
    navBackground: "#FAFAFA", // Light background for the navigation bar
};

const commonFonts = {
    boldFont: "Poppins_Bold",
    semiBoldFont: "Poppins_SemiBold",
    regularFont: "Poppins_Regular",
};

const commonStyles = {
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0", // This is for the outer background around the rounded body
        padding: 20, // Padding around the body
    },
    roundedBody: {
        backgroundColor: commonColors.background,
        borderRadius: 20, // To give the body a rounded rectangle shape
        padding: 20, // Padding inside the rounded body
        flex: 1,
        shadowColor: "#000", // Shadow for visual depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // Elevation for Android
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
        flex: 1,
        backgroundColor: commonColors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },

    carouselContainer: {
        marginBottom: 20,
    },
    // Top Header styles
    header: {
        backgroundColor: commonColors.headerBackground,
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: commonFonts.boldFont,
        fontSize: 32,
        color: commonColors.background, // White color for the HymnHub text
    },
    // Bottom Navigation styles
    navigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingVertical: 8,
        borderColor: commonColors.borderColor,
    },
    iconContainer: {
        alignItems: "center",
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

    roundedTopContainer: {
        flex: 1,
        backgroundColor: commonColors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: -25,
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
        justifyContent: "flex-end", // Ensure the text is placed at the bottom
        alignItems: "flex-start",  // Align the text to the left
        padding: 10, // Padding inside the card
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

    // Coming Soon
    comingSoonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#182026", // Dark background for Coming Soon
    },
    comingSoonText: {
        fontSize: 32,
        fontFamily: commonFonts.semiBoldFont,
        color: "#FFFFFF",
        marginBottom: 10,
    },
    comingSoonSubText: {
        fontSize: 18,
        fontFamily: commonFonts.regularFont,
        color: "#9A8C98", // Secondary text color for Coming Soon
    },

    // Search Tab
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        height: 55,
        borderColor: commonColors.borderColor,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 18,
        color: commonColors.textPrimary, // Text color inside input
        fontFamily: commonFonts.regularFont,
    },
    filterIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
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
});

export default styles;
