import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { style } from "./style";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function MinhaConta() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [isEditing, setIsEditing] = useState({
        email: false,
        senha: false,
        telefone: false,
        emailRecuperacao: false
    });

    const [userData, setUserData] = useState({
        nome: "Lorem da Silva",
        email: "loremdasilva@gmail.com",
        senha: "",
        telefone: "98 90000-0000",
        emailRecuperacao: ""
    });

    const [tempData, setTempData] = useState({ ...userData });

    const handleEdit = (field: keyof typeof isEditing) => {
        setIsEditing(prev => ({ ...prev, [field]: !prev[field] }));
        if (!isEditing[field]) {
            setTempData({ ...userData });
        }
    };

    const handleSave = (field: keyof typeof userData) => {
        setUserData(prev => ({ ...prev, [field]: tempData[field] }));
        setIsEditing(prev => ({ ...prev, [field]: false }));
        Alert.alert("Sucesso", "Informação atualizada com sucesso!");
    };

    const handleCancel = (field: keyof typeof isEditing) => {
        setIsEditing(prev => ({ ...prev, [field]: false }));
        setTempData({ ...userData });
    };

    const renderEditableField = (
        label: string,
        field: keyof typeof userData,
        icon: string,
        isPassword: boolean = false,
        placeholder?: string
    ) => {
        const editingKey = field as keyof typeof isEditing;
        const isCurrentlyEditing = isEditing[editingKey];
        
        return (
            <View style={style.fieldContainer}>
                <View style={style.fieldHeader}>
                    <Text style={style.fieldLabel}>{label}</Text>
                    {!isCurrentlyEditing ? (
                        <TouchableOpacity 
                            onPress={() => handleEdit(editingKey)}
                            style={style.editButton}
                        >
                            <MaterialIcons name="edit" size={20} color="#1E90FF" />
                        </TouchableOpacity>
                    ) : (
                        <View style={style.actionButtons}>
                            <TouchableOpacity 
                                onPress={() => handleSave(field)}
                                style={style.saveButton}
                            >
                                <MaterialIcons name="check" size={20} color="#4CAF50" />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => handleCancel(editingKey)}
                                style={style.cancelButton}
                            >
                                <MaterialIcons name="close" size={20} color="#F44336" />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                
                {isCurrentlyEditing ? (
                    <TextInput
                        style={style.textInput}
                        value={tempData[field]}
                        onChangeText={(text) => setTempData(prev => ({ ...prev, [field]: text }))}
                        secureTextEntry={isPassword}
                        placeholder={placeholder}
                        autoFocus
                    />
                ) : (
                    <View style={style.fieldValue}>
                        <Text style={style.fieldText}>
                            {isPassword ? "••••••••" : (userData[field] || placeholder)}
                        </Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <ScrollView style={style.container}>
            {/* Header com gradiente */}
            <View style={style.header}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('BottomRoutes', { screen: 'User' })}
                    style={style.backButton}
                >
                    <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={style.headerTitle}>Minha Conta</Text>
            </View>

            {/* Seção do perfil */}
            <View style={style.profileSection}>
                <View style={style.avatarContainer}>
                    <View style={style.avatar}>
                        <AntDesign name="user" size={50} color="#CCCCCC" />
                    </View>
                    <TouchableOpacity style={style.editAvatarButton}>
                        <MaterialIcons name="camera-alt" size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                <Text style={style.userName}>{userData.nome}</Text>
                <View style={style.verifiedBadge}>
                    <MaterialIcons name="verified" size={16} color="#1E90FF" />
                </View>
            </View>

            {/* Card de informações */}
            <View style={style.infoCard}>
                <Text style={style.cardTitle}>Informações da Conta</Text>
                
                {renderEditableField("Email", "email", "email", false)}
                {renderEditableField("Alterar senha", "senha", "lock", true, "Nova senha")}
                {renderEditableField("Telefone", "telefone", "phone", false)}
                
                <View style={style.fieldContainer}>
                    <View style={style.fieldHeader}>
                        <Text style={style.fieldLabel}>Email para recuperação de conta:</Text>
                        <MaterialIcons name="warning" size={20} color="#FF9800" />
                    </View>
                    <View style={style.fieldValue}>
                        <Text style={style.placeholderText}>
                            {userData.emailRecuperacao || "Adicionar email de recuperação"}
                        </Text>
                    </View>
                </View>
            </View>

            {/* Botões de ação */}
            <View style={style.actionSection}>
                <TouchableOpacity style={style.primaryButton}>
                    <Text style={style.primaryButtonText}>Salvar Alterações</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.secondaryButton}>
                    <Text style={style.secondaryButtonText}>Excluir Conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}