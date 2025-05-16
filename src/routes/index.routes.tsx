import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../src/pages/login";
import Register from "../pages/register";
import BottomRoutes from "./bottom.routes";
import List from "../pages/list";
import Calendar from "../pages/calendar";
import Lembrete from "../pages/lembrete";
import Perfil from "../pages/perfil";

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
          
           
          
        </Stack.Navigator>
    )
   
        
    
}