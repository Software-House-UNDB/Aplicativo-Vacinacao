import {Button, Dimensions, StyleSheet, TextInput} from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    boxTop:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Dimensions.get("window").height/8,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 59,
        borderColor: 'gray',
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        zIndex: 1,
    },
    formContainer: {
        marginTop: Dimensions.get("window").height/6,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#236EFA',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    saveButton: {
        backgroundColor: '#236EFA',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})