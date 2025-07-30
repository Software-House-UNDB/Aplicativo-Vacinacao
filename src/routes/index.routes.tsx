import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../src/pages/login";
import Register from "../pages/register";
import BottomRoutes from "./bottom.routes";
import List from "../pages/list";
import Calendar from "../pages/calendar";
import Lembrete from "../pages/lembrete";
import Perfil from "../pages/perfil";
import Configpage from "../pages/configpage";
import SobreNos from "../pages/sobreNos";
import MinhaConta from "../pages/minhaConta";
import Notifications from "../pages/notifications";
import VacinaTela from "../pages/listaVacinas";


export default function Routes (){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
           initialRouteName="Login"
           screenOptions={{
            headerShown:false,
            cardStyle:{
               backgroundColor:'white',
            }
           }}
        >
           <Stack.Screen
              name="Login"
              component={Login}
           
           />
           <Stack.Screen
              name="BottomRoutes"
              component={BottomRoutes}
           />
           <Stack.Screen
              name="Register"
              component={Register}
           
           />
           <Stack.Screen 
               name="List"
               component={List}
           />
           <Stack.Screen
                name="Calendar"
                component={Calendar}
            />
            <Stack.Screen
                name="Lembrete"
                component={Lembrete}
            />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
            />
            <Stack.Screen
                name="Configpage"
                component={Configpage}
            />
            <Stack.Screen 
                name="ListaVacinas"
                component={VacinaTela}
            />
            <Stack.Screen
                name="SobreNos"
                component={SobreNos}
            />
            <Stack.Screen
                name="MinhaConta"
                component={MinhaConta}
            />
            <Stack.Screen
                name="Notifications"
                component={Notifications}
            />
          
        </Stack.Navigator>
    )
   
        
    
}