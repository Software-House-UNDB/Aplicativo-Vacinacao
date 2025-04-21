import { StyleSheet,Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:20,
        marginTop:20,
        marginBottom:10,
        height:70,
        
    },
    tabButtonItem:{
        flex: 1,
        alignContent:'center',
        alignItems:'center',
        borderRadius:50,
        justifyContent:'center',
        marginHorizontal:10,
        width:50,
        height:50,
        
        

    },
   
})