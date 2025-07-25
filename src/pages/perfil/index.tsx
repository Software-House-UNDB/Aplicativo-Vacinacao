// Importação de bibliotecas e componentes necessários
import React from "react"; // Biblioteca principal do React
import { Text, TouchableOpacity, View, TextInput } from "react-native"; // Componentes básicos do React Native
import { style } from "../perfil/style" // Importação dos estilos definidos para esta tela
import { AntDesign } from '@expo/vector-icons'; // Biblioteca de ícones
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Hooks de navegação
import { ScrollView } from "react-native-gesture-handler"; // Componente de rolagem

// Componente principal da tela de Perfil
export default function Perfil() {
    // Hook de navegação que permite navegar entre telas
    const navigation = useNavigation<NavigationProp<any>>();
    
    return(
        // ScrollView permite rolar a tela quando o conteúdo é maior que o espaço disponível
        <ScrollView style={style.container}>
            {/* Cabeçalho da tela com botão de voltar e título */}
            <View style={style.boxTop}>
                {/* Botão para voltar à tela anterior */}
                <TouchableOpacity onPress={() => navigation.navigate('User')}>
                    <AntDesign
                        name="arrowleft" // Ícone de seta para esquerda
                        style={{fontSize: 28, marginRight: 55,}} // Estilo inline do ícone
                    />
                </TouchableOpacity>
                {/* Título da tela dividido em duas partes com cores diferentes */}
                <Text style={{fontSize:24, fontWeight:"bold", alignItems:'center'}}>
                    Edição de perfil
                </Text>
    
            </View>
            
            {/* Container principal do formulário */}
            <View style={style.formContainer}>
                {/* Título da seção de edição */}
                <Text style={style.sectionTitle}>Editar Informações Pessoais</Text>
                
                {/* Grupo de input para Nome Completo */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Nome Completo</Text>
                    <TextInput 
                        style={style.input}
                        defaultValue="Josenildo Testador da Silva" // Valor pré-preenchido
                    />
                </View>
                
                {/* Grupo de input para CPF */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>CPF</Text>
                    <TextInput 
                        style={style.input}
                        defaultValue="xxx-xxx-xxx-xx" // Valor pré-preenchido
                    />
                </View>
                
                {/* Grupo de input para Data de Nascimento */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Data de Nascimento</Text>
                    <TextInput 
                        style={style.input}
                        defaultValue="xx/xx/xxxx" // Valor pré-preenchido
                    />
                </View>
                
                {/* Grupo de input para Telefone */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Telefone</Text>
                    <TextInput 
                        style={style.input}
                        defaultValue="(xx) xxxx-xxxx" // Valor pré-preenchido
                    />
                </View>
                
                {/* Grupo de input para Email */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Email</Text>
                    <TextInput 
                        style={style.input}
                        defaultValue="josenildo@email.com" // Valor pré-preenchido
                    />
                </View>
                
                {/* Grupo de input para Endereço */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Endereço</Text>
                    <TextInput 
                        style={style.input}
                        defaultValue="Rua xxx, Bairro xxx, Município xxxxxxx" // Valor pré-preenchido
                    />
                </View>
                
                {/* Botão para salvar alterações e voltar à tela anterior */}
                <TouchableOpacity style={style.saveButton} onPress={() => navigation.navigate('User')}>
                    <Text style={style.saveButtonText}>Salvar Alterações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

