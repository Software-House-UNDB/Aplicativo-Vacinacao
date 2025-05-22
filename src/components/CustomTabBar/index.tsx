import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, View, Animated } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';

// Componente de barra de navegação inferior personalizada
export default function MyTabBar({ navigation }: any) {
    // Estado para controlar a aba ativa
    const [activeTab, setActiveTab] = useState('List');
    
    // Valores de animação para cada tab
    const animValues = {
        List: useRef(new Animated.Value(activeTab === 'List' ? 1 : 0)).current,
        Calendar: useRef(new Animated.Value(activeTab === 'Calendar' ? 1 : 0)).current,
        Lembrete: useRef(new Animated.Value(activeTab === 'Lembrete' ? 1 : 0)).current,
        Configpage: useRef(new Animated.Value(activeTab === 'Configpage' ? 1 : 0)).current,
    };
    
    // Efeito para animar a transição quando a tab ativa muda
    useEffect(() => {
        // Resetar todas as animações
        Object.keys(animValues).forEach(tab => {
            Animated.timing(animValues[tab as keyof typeof animValues], {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }).start();
        });
        
        // Animar a tab ativa
        Animated.timing(animValues[activeTab as keyof typeof animValues], {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [activeTab]);

    // Função para trocar de aba e navegar
    const go = (screenName: string) => {
        setActiveTab(screenName);
        navigation.navigate(screenName);
    }
    
    // Função para criar estilos animados para cada ícone
    const getAnimatedIconStyle = (tabName: string) => {
        const scaleAnim = animValues[tabName as keyof typeof animValues].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.2]
        });
        
        const opacityAnim = animValues[tabName as keyof typeof animValues].interpolate({
            inputRange: [0, 1],
            outputRange: [0.7, 1]
        });
        
        return {
            fontSize: 34,
            color: activeTab === tabName ? '#1E90FF' : 'black',
        };
    };
    
    return (
      <View style={style.tabArea}>
          {/* Botão para tela inicial */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("List")}>
                <Animated.View style={{
                    transform: [{ scale: animValues.List.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.2]
                    }) }],
                    opacity: animValues.List.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.7, 1]
                    })
                }}>
                    <AntDesign 
                     name="home"
                     style={getAnimatedIconStyle('List')}
                    />
                </Animated.View>
          </TouchableOpacity>
          {/* Botão para calendário */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Calendar")}>
                <Animated.View style={{
                    transform: [{ scale: animValues.Calendar.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.2]
                    }) }],
                    opacity: animValues.Calendar.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.7, 1]
                    })
                }}>
                    <AntDesign 
                      name="calendar"
                      style={getAnimatedIconStyle('Calendar')}
                    />
                </Animated.View>
          </TouchableOpacity>
          {/* Botão para lembretes */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Lembrete")}>
                <Animated.View style={{
                    transform: [{ scale: animValues.Lembrete.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.2]
                    }) }],
                    opacity: animValues.Lembrete.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.7, 1]
                    })
                }}>
                    <AntDesign 
                     name="bells"
                     style={getAnimatedIconStyle('Lembrete')}
                    /> 
                </Animated.View>
          </TouchableOpacity>
          {/* Botão para perfil/usuário */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Configpage")}>
                <Animated.View style={{
                    transform: [{ scale: animValues.Configpage.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.2]
                    }) }],
                    opacity: animValues.Configpage.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.7, 1]
                    })
                }}>
                    <AntDesign 
                      name="setting"
                      style={getAnimatedIconStyle('Configpage')}
                    />  
                </Animated.View>
          </TouchableOpacity>
      </View>
    ) 
}