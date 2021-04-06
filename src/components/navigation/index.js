import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";

/// Importacion de las pantallas de la aplicacion

import JoliePinkLogin from "../screens/JoliePinkLogin";
import JoliePinkRegister from "../screens/JoliePinkRegister";
import JoliePinkHome from "../screens/JoliePinkHome";
import JoliePinkPay from "../screens/JoliePinkPay";
import JoliePinkCategory from "../screens/JoliePinkCategory";
import JoliePinkProfile from "../screens/JoliePinkProfile";
import JoliePinkSpecificCategory from "../screens/JoliePinkSpecificCategory";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigation = () =>{
  //  const {state} = useContext({AuthContext});
    return(
<NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name = "Login" component = {JoliePinkLogin} options ={{ headerShown: false}}/>
          <Stack.Screen 
            name = "Home" 
            component = {myTabBar} 
            options = {{ headerShown: false}}
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
       
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;