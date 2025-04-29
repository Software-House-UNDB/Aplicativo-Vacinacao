import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingTop: 40,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    profileSection: {
        backgroundColor: '#F5F5F5',
        margin: 15,
        borderRadius: 15,
        padding: 15,
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
    },
    infoCard: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    infoText: {
        color: '#FFFFFF',
        marginBottom: 8,
        fontSize: 16,
    },
    emailCard: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        padding: 15,
    },
    settingsSection: {
        marginTop: 20,
        backgroundColor: '#F5F5F5',
        margin: 15,
        borderRadius: 15,
        padding: 15,
    },
    settingsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    settingsText: {
        fontSize: 16,
    },
});
