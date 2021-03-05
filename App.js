import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/// Importacion de React Navigation
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";


import Button from "../JoliePink_Proyecto/src/components/shared/Button";


/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "./src/components/screens/JoliePinkLogin";
import JoliePinkRegister from "./src/components/screens/JoliePinkRegister";
import JoliePinkHome from "./src/components/screens/JoliePinkHome";
import JoliePinkPay from "./src/components/screens/JoliePinkPay";
import JoliePinkCategory from "./src/components/screens/JoliePinkCategory";
import JoliePinkProfile from "./src/components/screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "./src/components/screens/JoliePinkSpecificCategory";


const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {JoliePinkLogin} options ={{
            title : "",
            headerStyle: {
              backgroundColor: '#f2d3ce',
              border: 0,
              borderBottomColor: '#f2d3ce'
            },
            headerRight: () => (
              <Button title = "Registrarse" 
              callback ={() => {navigation.navigate("Register")}}
              />
          )
        }}
        />
        <Stack.Screen name = "Home" component = {JoliePinkHome} options = {{headerShown: false
        }}/>
        <Stack.Screen name = "Register" component = {JoliePinkRegister} options = {{headerShown: false
        }}/>
        <Stack.Screen name = "Pay" component = {JoliePinkPay} options = {{headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>



  //  <JoliePinkLogin></JoliePinkLogin>
  //<JoliePinkRegister></JoliePinkRegister>options = {{headerShown: false
  //<JoliePinkHome></JoliePinkHome>
  // <JoliePinkCategory></JoliePinkCategory>
  // <JoliePinkProfile></JoliePinkProfile>
  // <JoliePinkSpecificCategory></JoliePinkSpecificCategory>

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
