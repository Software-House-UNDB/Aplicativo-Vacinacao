import { StyleSheet } from 'react-native';
import { Dimensions} from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        zIndex: 1,
        
       
    },
});