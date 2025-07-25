import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from './style';

interface NotificationBoxProps {
  visible: boolean;
  onClose: () => void;
}

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

// Componente de caixa de notificações
export default function NotificationBox({ visible, onClose }: NotificationBoxProps) {
  const navigation = useNavigation<NavigationProp<any>>();

  // Dados de exemplo para as notificações
  const notifications: NotificationItem[] = [
    {
      id: '1',
      title: 'Campanha de Vacinação',
      message: 'Nova campanha de vacinação contra gripe disponível',
      date: '10/05/2023',
      read: false
    },
    {
      id: '2',
      title: 'Lembrete de Vacina',
      message: 'Sua vacina contra COVID-19 está agendada para amanhã',
      date: '09/05/2023',
      read: true
    },
    {
      id: '3',
      title: 'Atualização de Carteira',
      message: 'Sua carteira de vacinação foi atualizada',
      date: '05/05/2023',
      read: true
    }
  ];

  // Se o componente não estiver visível, não renderiza nada
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Cabeçalho da caixa de notificações */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Notificações</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <AntDesign name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Lista de notificações */}
        <ScrollView style={styles.notificationList}>
          {notifications.map((notification) => (
            <TouchableOpacity 
              key={notification.id} 
              style={[styles.notificationItem, notification.read ? styles.readNotification : styles.unreadNotification]}
            >
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationDate}>{notification.date}</Text>
              </View>
              {!notification.read && <View style={styles.unreadIndicator} />}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Botão para ver todas as notificações */}
        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={() => {
            onClose();
            navigation.navigate('Notifications');
          }}
        >
          <Text style={styles.viewAllButtonText}>Ver todas as notificações</Text>
          <AntDesign name="right" size={16} color="#1E90FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}