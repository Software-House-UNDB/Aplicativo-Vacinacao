import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

// Página de notificações completa
export default function Notifications() {
  const navigation = useNavigation();

  // Estado para armazenar as notificações
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'Campanha de Vacinação',
      message: 'Nova campanha de vacinação contra gripe disponível em sua região. Visite o posto de saúde mais próximo.',
      date: '10/05/2023',
      read: false
    },
    {
      id: '2',
      title: 'Lembrete de Vacina',
      message: 'Sua vacina contra COVID-19 está agendada para amanhã às 14:00 no Centro de Saúde.',
      date: '09/05/2023',
      read: true
    },
    {
      id: '3',
      title: 'Atualização de Carteira',
      message: 'Sua carteira de vacinação foi atualizada com as últimas doses recebidas.',
      date: '05/05/2023',
      read: true
    },
    {
      id: '4',
      title: 'Vacina Disponível',
      message: 'A vacina que você estava aguardando já está disponível para aplicação.',
      date: '01/05/2023',
      read: true
    },
    {
      id: '5',
      title: 'Campanha Infantil',
      message: 'Nova campanha de vacinação infantil contra poliomielite. Traga seus filhos!',
      date: '28/04/2023',
      read: true
    },
    {
      id: '6',
      title: 'Atualização do Aplicativo',
      message: 'O VacinaPlus foi atualizado com novas funcionalidades. Confira as novidades!',
      date: '20/04/2023',
      read: true
    },
  ]);

  // Função para marcar uma notificação como lida
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  // Função para renderizar cada item da notificação
  const renderNotificationItem = ({ item }: { item: NotificationItem }) => (
    <TouchableOpacity 
      style={[styles.notificationItem, item.read ? styles.readNotification : styles.unreadNotification]}
      onPress={() => markAsRead(item.id)}
    >
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
      {!item.read && <View style={styles.unreadIndicator} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notificações</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Lista de notificações */}
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.notificationList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <AntDesign name="bells" size={60} color="#CCCCCC" />
          <Text style={styles.emptyText}>Nenhuma notificação</Text>
        </View>
      )}

      {/* Botão para marcar todas como lidas */}
      {notifications.some(notification => !notification.read) && (
        <TouchableOpacity 
          style={styles.markAllButton}
          onPress={() => {
            setNotifications(notifications.map(notification => ({ ...notification, read: true })));
          }}
        >
          <Text style={styles.markAllButtonText}>Marcar todas como lidas</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}