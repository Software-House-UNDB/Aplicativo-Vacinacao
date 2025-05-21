import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../pages/list";
import User from "../pages/user";
import CustomTabBar from "../components/CustomTabBar";
import Calendar from "../pages/calendar";
import Lembrete from "../pages/lembrete";
import Perfil from "../pages/perfil";
import Configpage from "../pages/configpage";

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
    
    return(
        <Tab.Navigator
            tabBar={props=><CustomTabBar{...props}/>}
            screenOptions={{
                headerShown:false
            }}
        >
            <Tab.Screen
                name="List"
                component={List}
            />
            <Tab.Screen
                name="User"
                component={User}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
            />
            <Tab.Screen
                name="Lembrete"
                component={Lembrete}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarButton: () => null,
                }}
            />
            <Tab.Screen
                name="Configpage"
                component={Configpage}
            />
        </Tab.Navigator>

    )
}