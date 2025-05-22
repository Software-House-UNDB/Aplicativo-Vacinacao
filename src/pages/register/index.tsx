import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { style } from "../register/style";
import Logo from "../../assets/logo.jpeg";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Componente principal da tela de Cadastro
export default function Register () {
    // Hook para navegação entre telas
    const navigation = useNavigation<NavigationProp<any>>();
    
    // Estados para controlar os campos do formulário
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmaSenha, setMostrarConfirmaSenha] = useState(false);
    
    // Função para validar o formulário antes de registrar
    const validarFormulario = () => {
        if (!email || !senha || !confirmaSenha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return false;
        }
        
        if (senha !== confirmaSenha) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return false;
        }
        
        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Erro', 'Por favor, insira um email válido');
            return false;
        }
        
        return true;
    };
    
    // Função para registrar o usuário
    const registrarUsuario = () => {
        if (validarFormulario()) {
            // Aqui você implementaria a lógica de registro
            // Por enquanto, apenas navegamos para a próxima tela
            navigation.navigate('BottomRoutes');
        }
    };
    
    return (
        <View style={style.Container}>
            {/* Área superior com logo e mensagem de boas-vindas */}
            <View style={style.boxTop}>
                <Text style={{fontSize:28, fontWeight:"bold"}}>
                    Vacina<Text style={{color:'#1E90FF'}}>Plus</Text>
                </Text>
                <Text style={style.Text}>Bem-Vindo!!</Text>
                <Text style={style.Text}>crie sua conta conosco</Text>
            </View>
            {/* Formulário de cadastro */}
            <View style={style.Main}>
                <View style={style.boxMid}>
                    <Text style={style.TextInput}>Digite seu E-Mail</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.Input} 
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <MaterialIcons 
                            name="email"
                            size={20}
                        />
                    </View>
                </View>
                <View style={style.boxMid}>
                    <Text style={style.TextInput}>Crie uma senha</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.Input} 
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={!mostrarSenha}
                        />
                        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                            <MaterialIcons 
                                name={mostrarSenha ? "visibility" : "visibility-off"}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.boxMid}>
                    <Text style={style.TextInput}>Insira a senha novamente</Text>
                    <View style={style.boxInput}>
                        <TextInput 
                            style={style.Input} 
                            value={confirmaSenha}
                            onChangeText={setConfirmaSenha}
                            secureTextEntry={!mostrarConfirmaSenha}
                        />
                        <TouchableOpacity onPress={() => setMostrarConfirmaSenha(!mostrarConfirmaSenha)}>
                            <MaterialIcons 
                                name={mostrarConfirmaSenha ? "visibility" : "visibility-off"}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Botões de ação */}
                <View style={style.boxButton}>
                    <TouchableOpacity 
                        style={style.Button1}
                        onPress={registrarUsuario}
                    >
                        <Text style={style.TextButton1}>REGISTRAR CONTA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={style.Button2}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={style.TextButton2}>JÁ POSSUI LOGIN ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}