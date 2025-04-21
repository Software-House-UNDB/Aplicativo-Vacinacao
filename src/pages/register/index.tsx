import React from "react";

import {Text, View, Image, TextInput, TouchableOpacity} from "react-native"
import { style } from "../register/style";
import Logo from "../../assets/logo.jpeg"
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation,NavigationProp} from '@react-navigation/native';

export default function Register (){
    const navigation = useNavigation<NavigationProp<any>>();
    return (
        <View style={style.Container}>
            <View style={style.boxTop}>
                <Image
                    style={style.Logo}
                    source={Logo}
                    resizeMode="contain" 
                />
                <Text style={style.Text}>Bem-Vindo!!</Text>
                <Text style={style.Text}>crie sua conta conosco</Text>
            </View>
            <View style={style.Main}>
                <View style={style.boxMid}>
                    <Text style={style.TextInput}>Digite seu E-Mail</Text>
                    <View style={style.boxInput}>
                        <TextInput style={style.Input} />
                        <MaterialIcons 
                        name="email"
                        size={20}
                         />
                    </View>
                </View>
                <View style={style.boxMid}>
                    <Text style={style.TextInput}>Crie uma senha</Text>
                    <View style={style.boxInput}>
                        <TextInput style={style.Input} />
                        <MaterialIcons 
                        name="key"
                        size={20}
                         />
                    </View>
                </View>
                <View style={style.boxMid}>
                    <Text style={style.TextInput}>Insira a senha novamente</Text>
                    <View style={style.boxInput}>
                        <TextInput style={style.Input} />
                        <MaterialIcons 
                        name="key"
                        size={20}
                         />
                    </View>
                </View>
                <View style={style.boxButton}>
                    <TouchableOpacity style={style.Button1}
                    onPress={() => navigation.navigate('BottomRoutes')}
                    >
                        <Text style={style.TextButton1}>REGISTRAR CONTA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button2}
                    onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={style.TextButton2}>JÁ POSSUI LOGIN ?</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
    )
}