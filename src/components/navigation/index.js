// import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import {Header} from "react-native-elements";

import { Context as AuthContext } from "../../providers/AuthContext";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

/// Importacion de React Navigation
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator, HeaderTitle} from "@react-navigation/stack";


// Importacion de componentes


import { ThemeProvider } from "react-native-elements";

import PersistLogin from "../../firebase/persistLogin";



/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "../screens/JoliePinkLogin";
import JoliePinkRegister from "../screens/JoliePinkRegister";
import JoliePinkHome from "../screens/JoliePinkHome";
import JoliePinkPay from "../screens/JoliePinkPay";
import JoliePinkCategory from "../screens/JoliePinkCategory";
import JoliePinkProfile from "../screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "../screens/JoliePinkSpecificCategory";
import JoliePinkForgotPassword from "../screens/JoliePinkForgotPassword";
import JoliePinkChangePassword from "../screens/JoliePinkChangePassword";
import JoliePinkVerification from "../screens/JoliePinkVerification";
import JoliePinkPurchasingProcess from "../screens/JoliePinkPurchasingProcess";
import JoliePinkShoppingCart from "../screens/JoliePinkShoppingCart";
import JoliePinkPurchasingUpdate from "../screens/JoliePinkPurchasingUpdate";


import theme from "../../theme";
import Button from "../shared/Button";




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
            tabBarLabel: 'Categoria',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tshirt-v" color={color} size={26} />
            ),
          }}
         />
      <Tab.Screen   name = "ShoppingCart" 
          component = {JoliePinkShoppingCart} 
          options={{
            tabBarLabel: 'Compras',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }}
          />
      <Tab.Screen   name = "Profile" 
          component = {JoliePinkProfile} 
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



const myTabBar2 =() =>{

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
            tabBarLabel: 'Categoria',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tshirt-v" color={color} size={26} />
            ),
          }}
         />
      <Tab.Screen   name = "Profile" 
          component = {JoliePinkProfile} 
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





function HeaderJolie(){
  return(
    <View style={styles.contenedorHeader}> 
        <Text style = {styles.textoJolie}>JoliePink</Text>
    </View>
   
  );
}

const Navigation = () => {

  const { state, persistLogin } = useContext(AuthContext);



  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    persistLogin();
  }, []);

   // Prevenir que se oculte la pantalla de splash
   SplashScreen.preventAutoHideAsync();

   // Ocultar la pantalla de splash al verificar que existe un token de inicio
   if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
          <>
          {state.loggedIn ? (
            <Stack.Navigator>
                <Stack.Screen 
                name = "Home" 
                component = {myTabBar} 
                options = {{ headerShown: false}}
                // initialParams={{ user: user }}
              />
              <Stack.Screen 
                name = "SpecificCategory" 
                component = {JoliePinkSpecificCategory} 
                options={{ headerTitle: props => <HeaderJolie {...props}/>,
                  headerStyle: {
                    backgroundColor: "#bd787d",

                  }}}
              />
              <Stack.Screen 
                  name = "Category" 
                  component = {myTabBar} 
                  options = {{headerShown: false}}
                />
                <Stack.Screen 
                name = "Verification" 
                component = {JoliePinkVerification} 
                options = {{ headerShown: false}}
              />
              <Stack.Screen 
                name = "Pay" 
                component = {JoliePinkPay} 
                options = {{ headerShown: false}}
              />
              <Stack.Screen 
                name = "Profile" 
                component = {JoliePinkProfile} 
                options = {{headerShown: false}}
              />
              <Stack.Screen 
                name = "ForgotPassword" 
                component = {JoliePinkForgotPassword} 
                options = {{headerShown: false}}
              />
              <Stack.Screen 
                name = "ChangePassword" 
                component = {JoliePinkChangePassword} 
                options = {{headerShown: false}}
              />
                <Stack.Screen 
                name = "PurchansingProcess" 
                component = {JoliePinkPurchasingProcess}
                options={{ headerTitle: props => <HeaderJolie {...props}/>,
                headerStyle: {
                  backgroundColor: "#bd787d",

                }}}
              />
                <Stack.Screen 
                name = "PurchansingUpdate" 
                component = {JoliePinkPurchasingUpdate}
                options={{ headerTitle: props => <HeaderJolie {...props}/>,
                headerStyle: {
                  backgroundColor: "#bd787d",

                }}}
              />
                <Stack.Screen 
                name = "ShoppingCart" 
                component = {myTabBar} 
                options={{ headerTitle: props => <HeaderJolie {...props}/>,
                headerStyle: {
                  backgroundColor: "#bd787d",

                }}}
              />
            </Stack.Navigator>
              ) : (
              <Stack.Navigator>
                <Stack.Screen 
                    name = "Login" 
                    component = {JoliePinkLogin}
                    // initialParams={{ userCreated: false }} 
                    options ={{ headerShown: false}}  
                />
                <Stack.Screen 
                  name = "Register" 
                  component = {JoliePinkRegister}  
                  options ={{ headerShown: false}}
                />    
              </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
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
  },
  textoJolie:{
    // justifyContent: "center",
    // alignSelf: "center",
    fontSize: 25,
    color: '#f9ece9', 
    fontSize: 25,
    marginLeft: -30,
    marginRight: 30
   
    // fontWeight: "bold"
  },
  contenedorHeader:{
    flex:1,
    justifyContent : 'space-around',
    justifyContent: "center",
    alignSelf: "center",
  }
});


export default Navigation;