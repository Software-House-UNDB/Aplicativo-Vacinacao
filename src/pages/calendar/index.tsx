import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importa a localização para português do Brasil
import NotificationBox from "../../components/NotificationBox";

// Configura o Moment.js para usar o locale pt-br globalmente
moment.locale('pt-br');

interface MyCalendarScreenProps {}

const MyCalendarScreen: React.FC<MyCalendarScreenProps> = () => {
  // O estado para a data selecionada pode ser uma string,
  // pois é o que a biblioteca usa para 'markedDates'
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(moment());
  const [showPicker, setShowPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationBoxVisible, setNotificationBoxVisible] = useState(false);

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios'); // Fecha o picker apenas no Android
    if (selectedDate) {
      const newDate = moment(selectedDate);
      setCurrentDate(newDate);
      setSelectedDate(newDate.format('YYYY-MM-DD'));
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.boxTop}>
        <Text style={{fontSize:24, fontWeight:"bold"}}>
            Vacina
        </Text>
        <Text style={{fontSize:24, fontWeight:"bold", color:'#1E90FF'}}>
            Plus
        </Text>
        <TouchableOpacity onPress={() => setNotificationBoxVisible(true)}>
            <AntDesign 
            name="bells"
            style={{fontSize: 33, paddingLeft: '52%'}}
            />
        </TouchableOpacity>    
      </View>
      <Text style={styles.headerText}>Calendário Vacina<Text style={{color:"#1E90FF"}}>Plus</Text></Text>
  
      <Calendar
        // Propriedade para definir a data inicial no calendário
        current={currentDate.format('YYYY-MM-DD')} // Usar currentDate ao invés de moment()

        // Marca o dia selecionado
        markedDates={
          selectedDate
            ? {
                [selectedDate]: {
                  selected: true,
                  marked: true,
                  // Cor que você pediu: #1E90FF (azul)
                  selectedColor: '#1E90FF',
                  dotColor: 'white',
                },
              }
            : {}
        }
        // Quando um dia é clicado
        // Não vamos tipar `day` explicitamente para evitar o erro do DateObject.
        // O TypeScript vai inferir o tipo ou você pode usar `any` se ele reclamar.
        onDayPress={(day: any) => { // Use 'any' aqui para evitar o erro do DateObject
          setSelectedDate(day.dateString); // day.dateString é 'YYYY-MM-DD'
          console.log('Dia selecionado:', day.dateString);
        }}
        // Permite a navegação por deslize entre os meses
        enableSwipeMonths={true}
        // Configuração do cabeçalho para exibir Mês e Ano em Português
        renderHeader={(date) => {
          // O objeto `date` aqui é um Moment-like object internamente.
          // Usamos moment para formatar.
          const momentDate = moment(date.timestamp); // Converte para um objeto Moment
          const month = momentDate.format('MMMM'); // Ex: "Maio" (em português por causa do moment.locale)
          const year = momentDate.format('YYYY');  // Ex: "2025"

          return (
            <TouchableOpacity 
              style={styles.customHeader}
              onPress={() => setShowPicker(true)}
            >
              <Text style={styles.headerMonth}>{month}</Text>
              <Text style={styles.headerYear}>{year}</Text>
            </TouchableOpacity>
          );
        }}
        // Estilização do calendário com a cor padrão #1E90FF
        theme={{
          backgroundColor: '#FFFFFF',
          calendarBackground: '#FFFFFF',
          textSectionTitleColor: '#b6c1cd', // Cor dos cabeçalhos dos dias da semana (Dom, Seg, Ter)
          selectedDayBackgroundColor: '#1E90FF', // Sua cor azul!
          selectedDayTextColor: '#FFFFFF', // Cor do texto do dia selecionado
          todayTextColor: '#1E90FF', // Cor do dia atual (se não estiver selecionado)
          dayTextColor: '#2d4150', // Cor dos números dos dias
          textDisabledColor: '#d9e1e8', // Cor dos dias desabilitados
          dotColor: '#00adf5', // Cor do ponto abaixo de dias marcados (se usar `marked`)
          selectedDotColor: '#FFFFFF',
          arrowColor: '#1E90FF', // Cor das setas de navegação
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#2d4150', // Cor do texto do mês no cabeçalho
          indicatorColor: '#1E90FF',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
      />
      {selectedDate && (
        <View>
          <Text style={styles.selectionText}>
            Você selecionou: <Text style={{ fontWeight: 'bold' }}>{selectedDate}</Text>
          </Text>
          <TouchableOpacity 
            style={styles.eventButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.eventButtonText}>Ver Eventos</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eventos para {selectedDate}</Text>
            <Text style={styles.modalText}>Nenhum evento cadastrado para esta data.</Text>
            
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {showPicker && (
        <DateTimePicker
          value={currentDate.toDate()}
          mode="date"
          display="default"
          onChange={onDateChange}
          locale="pt-BR"
        />
      )}

      {/* Componente de caixa de notificações */}
      <NotificationBox 
          visible={notificationBoxVisible} 
          onClose={() => setNotificationBoxVisible(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingTop: 50,
  },
  boxTop: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingTop: 59,
          paddingBottom: 16,
          borderColor: 'gray',
          borderBottomWidth: 1,
          backgroundColor: '#fff',
          zIndex: 1,
      },
  headerText: {
    marginTop: 90,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d4150',
    textAlign: 'center',
    marginBottom: 20,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerMonth: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d4150',
    marginRight: 5,
  },
  headerYear: {
    fontSize: 20,
    color: '#1E90FF', // Mês em azul
  },
  selectionText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#2d4150',
  },
  eventButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  eventButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2d4150',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  closeButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyCalendarScreen;