import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import NotificationBox from "../../components/NotificationBox";


// Tela de perfil do usuário
export default function User() {
    // Adicionando hook de navegação
    const navigation = useNavigation<NavigationProp<any>>();
    const [notificationBoxVisible, setNotificationBoxVisible] = useState(false);
    
    return (
        <ScrollView style={style.container}>
            {/* Cabeçalho */}
            <View style={style.header}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Configpage')}
                    style={style.backButton}
                >
                    <AntDesign name="arrowleft" size={24} color="#000000" />
                </TouchableOpacity>
                <Text style={style.headerText}>Perfil</Text>
                <TouchableOpacity onPress={() => setNotificationBoxVisible(true)}>
                    <AntDesign name="bells" size={24} color="#000000" />
                </TouchableOpacity>
            </View>

            {/* Seção de informações do usuário */}
            <View style={style.profileSection}>
                <View style={style.avatarContainer}>
                    <View style={style.avatar}>
                        <AntDesign name="user" size={60} color="#CCCCCC" style={{padding: 20}} />
                    </View>
                </View>
                <View style={style.infoCard}>
                    <Text style={style.infoText}>Nome: Josenildo Testador da Silva</Text>
                    <Text style={style.infoText}>CPF: 123-456-789.10</Text>
                    <Text style={style.infoText}>Data de Nascimento: 01/02/2003</Text>
                    <Text style={style.infoText}>Raça: Branco</Text>
                    <Text style={style.infoText}>CNS / Convênio: 789456123</Text>
                    <Text style={style.infoText}>Telefone: (11) 98765-4321</Text>
                    <Text style={style.infoText}>Sexo: Masculino</Text>
                    
                    <TouchableOpacity 
                        style={style.editButton}
                        onPress={() => navigation.navigate('Perfil')}
                    >
                        <Text style={style.editButtonText}>Editar Informações</Text>
                        <MaterialIcons name="edit" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Seção de configurações e informativos */}
            <View style={style.settingsSection}>
                <Text style={style.settingsHeader}>Conta e Informativo</Text>
                <TouchableOpacity 
                    style={style.settingsItem}
                    onPress={() => navigation.navigate('MinhaConta')}
                >
                    <Text style={style.settingsText}>Informações da Conta</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={style.settingsItem}>
                    <Text style={style.settingsText}>Análise de Histórico</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={style.settingsItem}
                    onPress={() => navigation.navigate('SobreNos')}
                >
                    <Text style={style.settingsText}>Sobre o VacinaPLUS</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
            </View>
            
            {/* Componente de caixa de notificações */}
            <NotificationBox 
                visible={notificationBoxVisible} 
                onClose={() => setNotificationBoxVisible(false)} 
            />
        </ScrollView>
    );
}