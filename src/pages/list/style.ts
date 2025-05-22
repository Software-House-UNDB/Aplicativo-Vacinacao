import { StyleSheet } from 'react-native';
import { Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        
    },
    boxTop: {
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
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        zIndex: 1,
        
       
    },
    boxMiddle: {
        height:Dimensions.get("window").height/1.8,
        width: '100%',
        alignContent:'center',
        justifyContent:'center',
    },
    boxBottom: {
        height:Dimensions.get("window").height/4.5,
        width: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    ButtomLogo:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:20
        
    },
    ImageLogo:{
        width:'80%',
        height:160,
        borderRadius:25

    },
    AreaFuncButtom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    ButtomFunc:{
        width: 100,
        height: 100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1E90FF',
        marginHorizontal:10,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },
    TextFunc:{
        fontSize:15,
        fontWeight:'bold',
        marginTop:8,
        textAlign:'center',
        width: 100,
        
        
        

        
    }
});

export default styles;