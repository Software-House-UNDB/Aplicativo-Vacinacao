import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated, Modal } from "react-native";
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';

// Tela de lembretes de vacinação
export default function LembretesTela() {
  const [date,setDate] = useState<Date>(new Date());
  const [mode,setMode] = useState('date');
  const [showDatePicker,setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const  dateStr = format(date, 'yyyy-MM-dd');
  const  timeStr = format(date, 'HH:mm');


  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);

    if (event.type === 'set') {
      const hours = date.getHours();
      const minute = date.getMinutes();
      currentDate.setHours(hours);
      currentDate.setMinutes(minute);
      setDate(currentDate);
    }
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    const currentDate = new Date(date);
    setShowTimePicker(false);

    if (event.type === 'set' && selectedTime) {
      currentDate.setHours(selectedTime.getHours());
      currentDate.setMinutes(selectedTime.getMinutes());
      setDate(currentDate);
    } 
  };

  // Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = useState(false);
  // Animação para o modal
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Função para exibir o modal com animação
  const showModal = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Função para esconder o modal com animação
  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      {/* Topo da tela */}
      <View style={styles.boxTop}>
        <Text style={{fontSize:24, fontWeight:"bold"}}>
            Vacina
        </Text>
        <Text style={{fontSize:24, fontWeight:"bold", color:'#1E90FF'}}>
            Plus
        </Text>
        <TouchableOpacity>
            <AntDesign 
            name="bells"
            style={{fontSize: 33, paddingLeft: '52%'}}
            />
        </TouchableOpacity>    
      </View>

      {/* Subtítulo */}
      <Text style={styles.subheader}>Lembretes de Vacinação</Text>
      
      {/* Botão para adicionar novo lembrete */}
      <TouchableOpacity onPress={showModal} style={styles.card}>
        <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold',color:'#fff'}}>Adicionar Novo Lembrete</Text>
      </TouchableOpacity>

      {/* Modal para cadastro de lembrete */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <Animated.View 
            style={[
              styles.modalContent,
              {
                opacity: fadeAnim,
                transform: [{
                  scale: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1]
                  })
                }]
              }
            ]}
          >
            {/* Cabeçalho do modal */}
            <View style={styles.modalHeader}>
              <Text style={styles.cardTitle}>Seu Lembrete</Text>
            </View>

            {/* Campos do formulário */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Vacina</Text>
              <TextInput style={styles.input} />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data e Hora</Text>
              <View style={styles.timeRow}>

                <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
                  <Text style={styles.datePickerText}>
                    {format(date, 'dd/MM/yyyy', {locale: ptBR})}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowTimePicker(true)}>
                  <Text style={styles.datePickerText}>
                    {format(date, 'HH:mm')}
                  </Text>
                </TouchableOpacity>

                {showDatePicker && (
                  <DateTimePicker mode="date" display="default" value={date} is24Hour={true} onChange={onDateChange} minimumDate={new Date()}
                />
                )}

                {showTimePicker && (
                  <DateTimePicker
                    value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onTimeChange}
                  />
            )}

              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Unidade Médica</Text>
              <TextInput style={styles.input} />
            </View>

            {/* Botão para salvar o lembrete */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={hideModal}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}
