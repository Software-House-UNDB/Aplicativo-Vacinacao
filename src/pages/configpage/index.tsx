import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Tela de perfil do usuário
export default function Configpage() {
    // Adicionando hook de navegação
    const navigation = useNavigation<NavigationProp<any>>();
    
    return (
        <ScrollView style={style.container}>
            {/* Cabeçalho */}
            <View style={style.header}>
                <Text style={style.headerText}>Configurações</Text>
            </View>
            {/* Seção de perfil */}
            <View style={style.profileSection}>
                {/* Avatar do usuário */}
                <View style={style.avatarContainer}>
                    <View style={style.avatar}>
                        <AntDesign name="user" size={60} color="#CCCCCC" style={{padding: 20}} />
                    </View>
                    <Text style={style.avatarText}>
                        Josenildo Testador da Silva
                    </Text>
                </View>
            </View>
            {/* Botão de edição de Conta */}
            <View style={style.boxFunctions}>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate("User")}>
                    <AntDesign name="user" size={50} color="#black" style={{padding: 10}} />
                    <Text style={style.editButtonText}>Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate("Notifications")}>
                    <AntDesign name="bells" size={50} color="#black" style={{padding: 10}} />
                    <Text style={style.editButtonText}>Notificações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate("User")}>
                    <AntDesign name="lock" size={50} color="#black" style={{padding: 10}} />
                    <Text style={style.editButtonText}>Permissões do App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate("User")}>
                    <AntDesign name="edit" size={50} color="#black" style={{padding: 10}} />
                    <Text style={style.editButtonText}>Personalização do App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.editButton} onPress={() => navigation.navigate("User")}>
                    <AntDesign name="warning" size={50} color="#black" style={{padding: 10}} />
                    <Text style={style.editButtonText}>Ajuda</Text>
                </TouchableOpacity>
            </View>  
        </ScrollView>
    );

}