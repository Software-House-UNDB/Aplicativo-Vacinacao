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
        margin: 10,
        borderRadius: 15,
        padding: 15,
    },
    avatarContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
    },
    avatarText:{
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    boxFunctions:{
        flex:    1,
        alignItems: 'center',
        justifyContent: 'space-between',
  
        marginVertical: 10,
        
    },
    editButton: {
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start', // Faz com que o botão se alinhe à esquerda
        marginVertical: 10,
    },
    editButtonText: {
        fontSize: 22,
        color: '#black',
        fontWeight: 'bold',
    },
})