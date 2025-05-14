import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import vacina from "../../assets/vacina.jpg";
import gripe from "../../assets/gripe.jpg";
import vacine from "../../assets/vacine.png";  
import historico from "../../assets/historico.png";
import saude from "../../assets/saude.png";

// Tela principal após login, exibe campanhas e atalhos
export default function List () {
    return(
        <View style={styles.container}>
            {/* Topo com título e ícone de notificações */}
            <View style={styles.boxTop}>
                <Text style={{fontSize:24, fontWeight:"bold"}}>
                    Vacina
                </Text>
                <Text style={{fontSize:24, fontWeight:"bold", color:'#236EFA'}}>
                    Plus
                </Text>
                <TouchableOpacity>
                    <AntDesign 
                    name="bells"
                    style={{fontSize: 33, paddingLeft: '52%'}}
                    />
                </TouchableOpacity>
            </View>
            {/* Campanhas de vacinação */}
            <View style={styles.boxMiddle}>
                <Text style={{fontSize:17, fontWeight:'bold', marginTop:60,marginLeft:15}}>
                    Campanhas
                </Text>
                 <TouchableOpacity style={styles.ButtomLogo}>
                    <Image
                        style={styles.ImageLogo}
                        source={vacina} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtomLogo}>
                    <Image
                        style={styles.ImageLogo}
                        source={gripe} 
                        resizeMode="contain"
                    />
                </TouchableOpacity >
            </View>
            {/* Atalhos para funcionalidades principais */}
            <View style={styles.boxBottom}>
                <View style={styles.AreaFuncButtom}>
                    <TouchableOpacity style={styles.ButtomFunc}>
                        <Image
                            style={{ width:90,height:90}}
                            source={vacine} 
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.ButtomFunc}>
                        <Image
                            style={{ width:90,height:90}}
                            source={historico} 
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.ButtomFunc}>
                        <Image
                            style={{ width:90,height:90}}
                            source={saude} 
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', width: '100%'}} >
                    <Text style={styles.TextFunc}>Vacina</Text>
                    <Text style={styles.TextFunc}>Histórico{'\n'}Médico</Text>
                    <Text style={styles.TextFunc}>Saúde +{'\n'}Educação</Text>
                </View>
            </View>
        </View>
    )
}


