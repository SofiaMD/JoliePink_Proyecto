import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/// Importacion de React Navigation
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";


import Button from "./src/components/Button";


/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "./src/screens/JoliePinkLogin";
import JoliePinkRegister from "./src/screens/JoliePinkRegister";
import JoliePinkHome from "./src/screens/JoliePinkHome";
import JoliePinkCategory from "./src/screens/JoliePinkCategory";
import JoliePinkProfile from "./src/screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "./src/screens/JoliePinkSpecificCategory";


const Stack = createStackNavigator();

export default function App() {
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
        <Stack.Screen name = "Home" component = {JoliePinkHome} options = {{ title: "Home"
        }}/>
         <Stack.Screen name = "Register" component = {JoliePinkRegister} options = {{ title: "Register"
        }}/>
         <Stack.Screen name = "Profile" component = {JoliePinkProfile} options = {{headerShown: false}}/>
         <Stack.Screen name = "SpecificCategory" component = {JoliePinkSpecificCategory} options = {{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>



  //  <JoliePinkLogin></JoliePinkLogin>
  // <JoliePinkRegister></JoliePinkRegister>
  // <JoliePinkHome></JoliePinkHome>
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
