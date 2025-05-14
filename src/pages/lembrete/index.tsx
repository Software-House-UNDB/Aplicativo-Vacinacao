import React, { useState, useRef } from "react";
import { Text, View, TextInput, TouchableOpacity, Animated, Modal } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from './style';

// Tela de lembretes de vacinação
export default function LembretesTela() {
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
        <Text style={{fontSize:24, fontWeight:"bold", color:'#236EFA'}}>
            Plus
        </Text>
        <TouchableOpacity>
            <AntDesign 
            name="bells"
            style={{fontSize: 34, paddingLeft: '52%'}}
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
                <TextInput style={styles.smallInput} />
                <TextInput style={styles.smallInput} />
                <TextInput style={styles.smallInput} />
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
