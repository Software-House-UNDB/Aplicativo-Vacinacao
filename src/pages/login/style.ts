import { Button, Dimensions, StyleSheet, TextInput } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height: Dimensions.get("window").height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    boxMid:{
        height: Dimensions.get("window").height/4,
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 25
    },
    RenovSenha:{
        marginTop: 8,
        marginLeft: 8,
        color: '#0899c7'
    },
    boxButton:{
        height: Dimensions.get("window").height/3,
        width: '100%',
        alignItems: 'center'
    },
    logo:{
        height: 100,
        width: 100,
        borderRadius: 10,
        marginTop: 40
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
        
        
    },
    titleInput: {
        marginLeft: 5,
        marginTop: 20,
        fontWeight: 'bold'
        
        
    },
    boxInput:{
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor:'#d0f4ff',
        borderColor: '#d0f4ff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
        

    },
    Input:{
        height: '100%',
        width: '90%',
        borderRadius: 40
    },
    Button:{
        marginTop: 15,
        height: 50,
        width: '45%',
        borderRadius: 10,
        backgroundColor: '#069aca',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        justifyContent: 'center',
        elevation: 6,

    },
    TextButton:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        
        
    },
    Button2:{
        marginTop: 18,
        width: '45%',
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 4,
        },
        TextButton2:{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black'
        }
    })