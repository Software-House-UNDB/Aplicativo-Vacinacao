import React, { useState } from "react";
import { Text,TouchableOpacity, View } from "react-native";
import { style } from "./style";
import {Ionicons, FontAwesome, Entypo, AntDesign, MaterialIcons} from '@expo/vector-icons'

export default function MyTabBar({ navigation }:any) {
    const [activeTab, setActiveTab] = useState('List');

    const go = (screenName:string) =>{
        setActiveTab(screenName);
        navigation.navigate(screenName);
    }
    return (
      <View style={style.tabArea}>
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("List")}>
                <AntDesign 
                 name="home"
                 style={{fontSize: 34, color: activeTab === 'List' ? '#069aca' : 'black'}}
                />
          </TouchableOpacity>
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Calendar")}>
                <AntDesign 
                  name="calendar"
                  style={{fontSize: 34, color: activeTab === 'Calendar' ? '#069aca' : 'black'}}
                />
          </TouchableOpacity>
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("Lembrete")}>
                <AntDesign 
                 name="bells"
                 style={{fontSize: 34, color: activeTab === 'Lembrete' ? '#069aca' : 'black'}}
                /> 
          </TouchableOpacity>
          <TouchableOpacity style={style.tabButtonItem} onPress={()=> go("User")}>
                <AntDesign 
                  name="setting"
                  style={{fontSize: 34, color: activeTab === 'User' ? '#069aca' : 'black'}}
                />  
          </TouchableOpacity>
      </View>
    ) 
  }