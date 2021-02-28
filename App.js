import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "./src/screens/JoliePinkLogin";
import JoliePinkRegister from "./src/screens/JoliePinkRegister";
import JoliePinkHome from "./src/screens/JoliePinkHome";
import JoliePinkCategory from "./src/screens/JoliePinkCategory";
import JoliePinkProfile from "./src/screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "./src/screens/JoliePinkSpecificCategory";

export default function App() {
  return (
  //  <JoliePinkLogin></JoliePinkLogin>
  <JoliePinkRegister></JoliePinkRegister>
  //<JoliePinkHome></JoliePinkHome>
  // <JoliePinkCategory></JoliePinkCategory>
  // <JoliePinkProfile></JoliePinkProfile>
  //<JoliePinkSpecificCategory></JoliePinkSpecificCategory>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
