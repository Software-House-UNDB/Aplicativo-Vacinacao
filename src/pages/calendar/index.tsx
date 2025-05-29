import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importa a localização para português do Brasil

// Configura o Moment.js para usar o locale pt-br globalmente
moment.locale('pt-br');

interface MyCalendarScreenProps {}

const MyCalendarScreen: React.FC<MyCalendarScreenProps> = () => {
  // O estado para a data selecionada pode ser uma string,
  // pois é o que a biblioteca usa para 'markedDates'
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <View style={styles.container}>
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
      <Text style={styles.headerText}>Seu Calendário Reativado</Text>
      <Calendar
        // Propriedade para definir a data inicial no calendário
        current={moment().format('YYYY-MM-DD')} // Exibe o mês atual ao iniciar

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
            <View style={styles.customHeader}>
              <Text style={styles.headerMonth}>{month}</Text>
              <Text style={styles.headerYear}>{year}</Text>
            </View>
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
        <Text style={styles.selectionText}>
          Você selecionou: <Text style={{ fontWeight: 'bold' }}>{selectedDate}</Text>
        </Text>
      )}
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
          paddingBottom: 20,
          borderColor: 'gray',
          borderBottomWidth: 1,
          backgroundColor: '#fff',
          zIndex: 1,
      },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d4150',
    textAlign: 'center',
    marginBottom: 22,
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
});

export default MyCalendarScreen;