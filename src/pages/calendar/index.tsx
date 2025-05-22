import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { style } from "../calendar/style";
import { AntDesign } from '@expo/vector-icons';

// Tela principal após login, exibe campanhas e atalhos
export default function Calendar () {
    return(
        <View style={style.container}>
            {/* Topo com título e ícone de notificações */}
            <View style={style.boxTop}>
                <Text style={{fontSize:24, fontWeight:"bold"}}>
                    Vacina
                </Text>
                <Text style={{fontSize:24, fontWeight:"bold", color:'#1E90FF'}}>
                    Plus
                </Text>
                <TouchableOpacity>
                    <AntDesign 
                    name="bells"
                    style={{fontSize: 33, paddingLeft: '52%'}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}