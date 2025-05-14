import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation,NavigationProp} from '@react-navigation/native';

export default function User() {
    return (
        <ScrollView style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>Perfil</Text>
            </View>

            <View style={style.profileSection}>
                <View style={style.avatarContainer}>
                    <View style={style.avatar}>
                        <AntDesign name="user" size={60} color="#CCCCCC" style={{padding: 20}} />
                    </View>
                </View>

                <View style={style.infoCard}>
                    <Text style={style.infoText}>Nome: Josenildo Testador da Silva</Text>
                    <Text style={style.infoText}>CPF: xxx-xxx-xxx-xx</Text>
                    <Text style={style.infoText}>Data de Nascimento: xx/xx/xxxx</Text>
                    <Text style={style.infoText}>Raça: xxxxxx</Text>
                    <Text style={style.infoText}>CNS / Convênio: xxxxxxxxxxxx</Text>
                    <Text style={style.infoText}>Telefone: (xx) xxxx-xxxx</Text>
                    <Text style={style.infoText}>Sexo: Masculino</Text>
                </View>

                <View style={style.emailCard}>
                    <Text style={style.infoText}>Email: josenildo@email.com</Text>
                    <Text style={style.infoText}>Endereço(opcional):</Text>
                    <Text style={style.infoText}>Rua xxx, Bairro xxx, Município xxxxxxx</Text>
                </View>
            </View>

            <View style={style.settingsSection}>
                <Text style={style.settingsHeader}>Conta e Informativo</Text>
                <TouchableOpacity style={style.settingsItem}>
                    <Text style={style.settingsText}>Edição de Perfil</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={style.settingsItem}>
                    <Text style={style.settingsText}>Análise de Histórico</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={style.settingsItem}>
                    <Text style={style.settingsText}>Sobre o VacinaPLUS</Text>
                    <AntDesign name="right" size={20} color="#000000" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}