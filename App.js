import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";


/// Importacion de React Navigation
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

// Importacion de componentes

import Button from "./src/components/shared/Button";


/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "./src/components/screens/JoliePinkLogin"
import JoliePinkRegister from "./src/components/screens/JoliePinkRegister";
import JoliePinkHome from "./src/components/screens/JoliePinkHome";
import JoliePinkCategory from "./src/components/screens/JoliePinkCategory";
import JoliePinkProfile from "./src/components/screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "./src/components/screens/JoliePinkSpecificCategory";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name = "Login" component = {JoliePinkLogin} options ={{
            title : "",
            headerStyle: {
              backgroundColor: "#f2d3ce",
              border: 0,
              borderBottomColor: "#f2d3ce"
            },
            headerRight: () => (
              <Button title = "Registrarse" 
              callback ={() => {navigation.navigate("Register")}}
              />
          )
        }}
        />
          <Stack.Screen 
          name = "Home" 
          component = {JoliePinkHome} 
          options = {{ title: "Home"}}
          />
          <Stack.Screen name = "Register" component = {JoliePinkRegister} options = {{ title: "Register"}}/>
          <Stack.Screen 
          name = "Category" 
          component = {JoliePinkCategory} 
          options = {{ title: "Category"}}
          />
          <Stack.Screen name = "SpecificCategory" component = {JoliePinkSpecificCategory} options = {{headerShown: false}}/>
       
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
