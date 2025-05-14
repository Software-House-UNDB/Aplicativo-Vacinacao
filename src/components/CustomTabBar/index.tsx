import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { AntDesign } from '@expo/vector-icons';

// Componente de barra de navegação inferior personalizada
export default function MyTabBar({ navigation }: any) {
    // Estado para controlar a aba ativa
    const [activeTab, setActiveTab] = useState('List');

    // Função para trocar de aba e navegar
    const go = (screenName: string) => {
        setActiveTab(screenName);
        navigation.navigate(screenName);
    }
    return (
      <View style={style.tabArea}>
          {/* Botão para tela inicial */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("List")}>
                <AntDesign 
                 name="home"
                 style={{fontSize: 34, color: activeTab === 'List' ? '#069aca' : 'black'}}
                />
          </TouchableOpacity>
          {/* Botão para calendário */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Calendar")}>
                <AntDesign 
                  name="calendar"
                  style={{fontSize: 34, color: activeTab === 'Calendar' ? '#069aca' : 'black'}}
                />
          </TouchableOpacity>
          {/* Botão para lembretes */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Lembrete")}>
                <AntDesign 
                 name="bells"
                 style={{fontSize: 34, color: activeTab === 'Lembrete' ? '#069aca' : 'black'}}
                /> 
          </TouchableOpacity>
          {/* Botão para perfil/usuário */}
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("User")}>
                <AntDesign 
                  name="setting"
                  style={{fontSize: 34, color: activeTab === 'User' ? '#069aca' : 'black'}}
                />  
          </TouchableOpacity>
      </View>
    ) 
}