import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";

/// Importacion de react navigation componente bottom-tabs;

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

/// Importacion de React Navigation
import { NavigationContainer, ThemeProvider} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

// Importacion de componentes

import Button from "./src/components/shared/Button";

import PersistLogin from "./src/utils/persistLogin";



/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "./src/components/screens/JoliePinkLogin";
import JoliePinkRegister from "./src/components/screens/JoliePinkRegister";
import JoliePinkHome from "./src/components/screens/JoliePinkHome";
import JoliePinkPay from "./src/components/screens/JoliePinkPay";
import JoliePinkCategory from "./src/components/screens/JoliePinkCategory";
import JoliePinkProfile from "./src/components/screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "./src/components/screens/JoliePinkSpecificCategory";
import theme from "./src/theme";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


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

export default function App() {

  const [user, setUser] = useState({});

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    const userData = PersistLogin();
    setUser(userData);
  }, []);


  return (
    <SafeAreaProvider>
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen 
          name = "Login" 
          component = {JoliePinkLogin} 
          options ={{ headerShown: false}}
          initialParams={{ userCreated: false }}
        />
          <Stack.Screen 
            name = "Home" 
            component = {myTabBar} 
            options = {{ headerShown: false}}
            initialParams={{ user: user }}
          />
          <Stack.Screen 
            name = "Register" 
            component = {JoliePinkRegister} 
            options = {{ headerShown: false}}
          />
          <Stack.Screen 
            name = "Category" 
            component = {myTabBar} 
            options = {{headerShown: false}}
          />
          <Stack.Screen 
            name = "SpecificCategory" 
            component = {myTabBar} 
            options = {{headerShown: false}}/>
          <Stack.Screen 
            name = "Profile" 
            component = {JoliePinkProfile} 
            options = {{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonRegistro:{
    marginRight: 15
  }
});
