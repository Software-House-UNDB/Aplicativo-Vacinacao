import {Button, Dimensions, StyleSheet, TextInput} from 'react-native';


export const style = StyleSheet.create({

        Container:{
            flex: 1,
            alignItems: 'center',
            marginTop: 50,
        },
        boxTop:{
            width: '100%',
            height: Dimensions.get("window").height/5,
            justifyContent: 'center',
            alignItems: 'center',

        },
        boxMid:{
            width: '100%',
            height: Dimensions.get("window").height/7,
            justifyContent: 'center',
            paddingHorizontal: 25,
            
        },
        boxInput:{
            flexDirection:'row',
            backgroundColor:'#d0f4ff',
            borderRadius: 10, 
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 4,
            alignItems: 'center',
            justifyContent: 'center'
        },
        boxButton:{
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center'
        },
        Text:{
            fontSize: 24,
            fontWeight: 'bold',
            
        },
        Logo:{
            height: 90,
            width: 90,
            borderRadius: 40,
            paddingRight: 5,
            
        },
        Input:{
            width: '80%',
            height: 40, 
            
            
        },
        TextInput:{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
        },
        Main:{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'

        },
        Button1:{
            width: '80%',
            height: 50,
            borderRadius: 10,
            backgroundColor: '#069aca',
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 4,
        },
        Button2:{
            marginTop: 15,
            width: '80%',
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
        TextButton1:{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white'

        },
        TextButton2:{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black'
        }

})