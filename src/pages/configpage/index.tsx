import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';


// Tela de perfil do usuário
export default function Configpage() {
    // Adicionando hook de navegação
    const navigation = useNavigation<NavigationProp<any>>();
    
    return (
        <View style={style.container}>
            {/* Cabeçalho */}
            <View style={style.header}>
                <Text style={style.headerText}>Configurações</Text>
            </View>
        </View>
    );
}