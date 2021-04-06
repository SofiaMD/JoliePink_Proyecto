import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./src/components/navigation";
import theme from "./src/theme";

/// Importacion de react navigation componente bottom-tabs;

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importacion de componentes

import Button from "./src/components/shared/Button";
import { ThemeProvider } from '@react-navigation/native';


const myTabBar =() =>{

  return(
    <Tab.Navigator 
    barStyle={{backgroundColor: "#DED1DB"}}>
      <Tab.Screen   name = "Home" 
          component = {JoliePinkHome}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          />
      <Tab.Screen   name = "Category" 
          component = {JoliePinkCategory} 
          options={{
            tabBarLabel: 'Compras',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }}
          />
      <Tab.Screen   name = "SpecificCategory" 
          component = {JoliePinkSpecificCategory} 
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
         />
    </Tab.Navigator>
  )
}

export default function App({navigation}) {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
     <Navigation/>
     </SafeAreaProvider>
    </ThemeProvider>
  );
}

