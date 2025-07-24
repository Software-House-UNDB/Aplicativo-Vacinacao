import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';


// Tela de perfil do usuário
export default function User() {
    // Adicionando hook de navegação
    const navigation = useNavigation<NavigationProp<any>>();
    
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
            </View>

            {/* Seção de informações do usuário */}
            <View style={style.profileSection}>
                <View style={style.avatarContainer}>
                    <View style={style.avatar}>
                        <AntDesign name="user" size={60} color="#CCCCCC" style={{padding: 20}} />
                    </View>
                </View>
                <View style={style.infoCard}>
                    <Text style={style.infoText}>Nome: Lorem da Silva</Text>
                    <Text style={style.infoText}>CPF: xxx-xxx-xxx-xx</Text>
                    <Text style={style.infoText}>Data de Nascimento: xx/xx/xxxx</Text>
                    <Text style={style.infoText}>Raça: xxxxxx</Text>
                    <Text style={style.infoText}>CNS / Convênio: xxxxxxxxxxxx</Text>
                    <Text style={style.infoText}>Telefone: (xx) xxxx-xxxx</Text>
                    <Text style={style.infoText}>Sexo: Masculino</Text>
                </View>
                <View style={style.emailCard}>
                    <Text style={style.infoText}>Email: loremdasilva@email.com</Text>
                    <Text style={style.infoText}>Endereço(opcional):</Text>
                    <Text style={style.infoText}>Rua xxx, Bairro xxx, Município xxxxxxx</Text>
                </View>
            </View>

            {/* Seção de configurações e informativos */}
            <View style={style.settingsSection}>
                <Text style={style.settingsHeader}>Conta e Informativo</Text>
                <TouchableOpacity 
                    style={style.settingsItem}
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Text style={style.settingsText}>Edição de Perfil</Text>
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
                <TouchableOpacity 
                    style={style.settingsItem}
                    onPress={() => navigation.navigate('MinhaConta')}
                >
                    <Text style={style.settingsText}>Minha Conta</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}