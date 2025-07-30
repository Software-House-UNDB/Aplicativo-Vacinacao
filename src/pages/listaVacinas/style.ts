import { StyleSheet } from "react-native";
import { Dimensions} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    backIcon: {
        paddingLeft: 10,
        paddingVertical: 5,
      
    }, 

    centerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 45,
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
        alignItems: 'center',
        paddingTop: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        zIndex: 1,
    },

    sideContainer: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },

    test: {
        
        alignSelf: 'flex-start',
        marginTop: Dimensions.get("window").height / 8 + 10,
        marginHorizontal: 15,
        
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'normal',
        padding: 2,
        marginTop: 15,
        marginBottom: 15,    
    },  
    content: {
        position: 'relative',
        alignSelf: 'flex-start',
        margin: 15,
        
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 35,
    },

    circle: {
        width: 10,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        marginRight: 15,
        marginTop: 8,
        
        
    },

    verticalLine: {
        position: 'absolute',
        left: 4.5,
        top: 10,
        bottom: 0,
        width: 1.5,
        backgroundColor: '#000',
        zIndex: -1,
    },
    contentText: {
        flex: 0,
    
    },
    ageContent: {
        fontSize: 22,
        color: '#1E90FF',
        fontWeight: '600',
        marginBottom: 5,
    },
    vaccineContent: {
        fontSize: 20,
        color: 'black',
        marginBottom: 2,
        fontWeight: 'bold',
    },
    dataContent: {
        fontSize: 18,
        marginBottom: 2,
        color: 'black',
    },
    localContent: {
        fontSize: 16,
    },

})