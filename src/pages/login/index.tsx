import React from "react";

import {Text, View, Image, TextInput, TouchableOpacity} from "react-native"
import { style } from "./style";
import Logo from "../../assets/logo.jpeg"
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation,NavigationProp} from '@react-navigation/native';

export default function Login (){
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    style={style.logo}
                    source={Logo} 
                    resizeMode="contain"
                />
                <Text style={style.text}>Seja Bem-Vindo!</Text>
            </View >
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
                    />
                <MaterialIcons 
                        name="remove-red-eye"
                        size={20}
                    />
                </View>
                <Text style={style.RenovSenha}>Esqueci a senha</Text>
            </View>
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