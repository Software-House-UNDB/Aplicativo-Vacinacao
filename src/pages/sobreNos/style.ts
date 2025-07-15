import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        marginRight: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        flex: 1,
        textAlign: 'center',
    },
    clapButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    clapEmoji: {
        fontSize: 24,
    },
    logoContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 300,
        height: 100,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    section: {
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 12,
        textAlign: 'left',
    },
    sectionText: {
        fontSize: 16,
        color: '#424242',
        lineHeight: 22,
        textAlign: 'justify',
        marginBottom: 10,
        letterSpacing: 0,
    },
    socialSection: {
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingHorizontal: 10,
    },
    socialContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
        width: '85%',
        justifyContent: 'center',
        marginVertical: 8,
    },
    socialText: {
        fontSize: 17,
        color: '#E4405F',
        marginLeft: 12,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    animatedClap: {
        position: 'absolute',
        zIndex: 1000,
    },
    clapEmojiAnimated: {
        fontSize: 30,
        opacity: 0.8,
    },
});