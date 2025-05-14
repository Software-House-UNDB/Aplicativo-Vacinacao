import React from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from './style';

export default function LembretesTela() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Vacina<Text style={styles.titlePlus}>Plus</Text></Text>
        </View>
        
      </View>

      <Text style={styles.subheader}>Lembretes de Vacinação</Text>
      
      <View style={styles.card}>

        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Seu Lembrete</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Vacina</Text>
          <TextInput style={styles.input} />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data e Hora</Text>
          <View style={styles.timeRow}>
            <TextInput style={styles.smallInput} />
            <TextInput style={styles.smallInput} />
            <TextInput style={styles.smallInput} />
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Unidade Médica</Text>
          <TextInput style={styles.input} />
        </View>
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );
}
