import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";
import Logo from "../../assets/logo.jpeg";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Componente principal da tela de Login
export default function Login () {
    // Hook para navegação entre telas
    const navigation = useNavigation<NavigationProp<any>>();
    
    // Estado para controlar a visibilidade da senha
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    
    // Função para alternar a visibilidade da senha
    const toggleSenhaVisivel = () => {
        setSenhaVisivel(!senhaVisivel);
    };
    
    return (
        <View style={style.container}>
            {/* Área superior com logo e mensagem de boas-vindas */}
            <View style={style.boxTop}>
                <Image
                    style={style.logo}
                    source={Logo} 
                    resizeMode="contain"
                />
                <Text style={style.text}>Seja Bem-Vindo!</Text>
            </View >
            {/* Área do formulário de login */}
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de e-mail</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.Input} 
                    />
                    <MaterialIcons 
                        name="email"
                        size={20}
                    />
                </View>
                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.Input}
                        secureTextEntry={!senhaVisivel} 
                    />
                    <TouchableOpacity onPress={toggleSenhaVisivel}>
                        <MaterialIcons 
                            name={senhaVisivel ? "visibility-off" : "visibility"}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                {/* Link para recuperação de senha */}
                <Text style={style.RenovSenha}>Esqueci a senha</Text>
            </View>
            {/* Botões de ação */}
            <View style={style.boxButton}>
                <TouchableOpacity style={style.Button}
                onPress={() => navigation.navigate('BottomRoutes')}
                >
                    <Text style={style.TextButton}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.Button2}
                onPress={() => navigation.navigate('Register')}
                >
                    <Text style={style.TextButton2}>NÃO POSSUI LOGIN?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}