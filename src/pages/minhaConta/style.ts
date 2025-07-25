import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    
    // Header com gradiente
    header: {
        height: height * 0.25,
        backgroundColor: '#1E90FF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    
    
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
        textAlign: 'center',
        marginTop: 15,
    },
    
    // Seção do perfil
    profileSection: {
        alignItems: 'center',
        marginTop: -60,
        marginBottom: 30,
    },
    
    avatarContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    
    editAvatarButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 5,
    },
    
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    // Card de informações
    infoCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 30,
    },
    
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 20,
        textAlign: 'center',
    },
    
    // Campos editáveis
    fieldContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECEF',
        paddingBottom: 15,
    },
    
    fieldHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    
    fieldLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6C757D',
        flex: 1,
    },
    
    fieldValue: {
        paddingVertical: 8,
    },
    
    fieldText: {
        fontSize: 16,
        color: '#2C3E50',
        fontWeight: '500',
    },
    
    placeholderText: {
        fontSize: 16,
        color: '#ADB5BD',
        fontStyle: 'italic',
    },
    
    textInput: {
        fontSize: 16,
        color: '#2C3E50',
        borderWidth: 2,
        borderColor: '#1E90FF',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#F8F9FA',
    },
    
    // Botões de ação nos campos
    editButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#E3F2FD',
    },
    
    actionButtons: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    
    saveButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#E8F5E8',
        marginRight: 15,
    },
    
    cancelButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFEBEE',
    },
    
    // Seção de ações principais
    actionSection: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 15,
    },
    
    primaryButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 16,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#1E90FF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    secondaryButton: {
        backgroundColor: 'transparent',
        paddingVertical: 16,
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#DC3545',
    },
    
    secondaryButtonText: {
        color: '#DC3545',
        fontSize: 16,
        fontWeight: 'bold',
    },
});