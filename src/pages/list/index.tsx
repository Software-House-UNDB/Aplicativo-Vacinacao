import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import vacina from "../../assets/vacina.png";
import gripe from "../../assets/gripe.jpg";
import vacine from "../../assets/vacine.png";  
import historico from "../../assets/historico.png";
import saude from "../../assets/saude.png";
import NotificationBox from "../../components/NotificationBox";
import { useNavigation } from '@react-navigation/native';

// Tela principal após login, exibe campanhas e atalhos
export default function List () {
    const navigation = useNavigation();
    const [notificationBoxVisible, setNotificationBoxVisible] = useState(false);
    
    // Função para abrir o link da campanha de vacinação
    const abrirLinkVacinaMais = async () => {
        const url = 'https://susconecta.org.br/backup/campanha-vacina-mais-lanca-novas-pecas-para-promover-a-imunizacao-no-brasil/23934/';
        const supported = await Linking.canOpenURL(url);
        
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.error("Não foi possível abrir o link: " + url);
        }
    };
    
    // Função para abrir o link da campanha de vacinação contra gripe
    const abrirLinkGripe = async () => {
        // Link corrigido para a campanha de vacinação contra gripe
        const url = 'https://www.pmitatinga.sp.gov.br/noticia/860/dia-d-de-vacinacao-contra-gripe-sarampo/';
        const supported = await Linking.canOpenURL(url);
        
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.error("Não foi possível abrir o link: " + url);
        }
    };
    
    return(
        <View style={styles.container}>
            {/* Topo com título e ícone de notificações */}
            <View style={styles.boxTop}>
                <Text style={{fontSize:24, fontWeight:"bold"}}>
                    Vacina
                </Text>
                <Text style={{fontSize:24, fontWeight:"bold", color:'#1E90FF'}}>
                    Plus
                </Text>
                <TouchableOpacity onPress={() => setNotificationBoxVisible(true)}>
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
                 <TouchableOpacity 
                    style={styles.ButtomLogo}
                    onPress={abrirLinkVacinaMais}
                 >
                    <Image
                        style={styles.ImageLogo}
                        source={vacina} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.ButtomLogo}
                    onPress={abrirLinkGripe}
                >
                    <Image
                        style={styles.ImageLogo}
                        source={gripe} 
                        resizeMode="contain"
                    />
                </TouchableOpacity >
                
            </View>
            {/* Atalhos para funcionalidades principais */}
            <Text style={{fontSize: 17, fontWeight:'bold'}}>Minha Saúde</Text>
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
                <View style={{flexDirection:'row', justifyContent:'space-between', width: '87%'}} >
                    <Text style={styles.TextFunc}>Vacina</Text>
                    <Text style={styles.TextFunc}>Histórico{'\n'}Médico</Text>
                    <Text style={styles.TextFunc}>Saúde +{'\n'}Educação</Text>
                </View>
            </View>
            
            {/* Componente de caixa de notificações */}
            <NotificationBox 
                visible={notificationBoxVisible} 
                onClose={() => setNotificationBoxVisible(false)} 
            />
        </View>
    )
}


