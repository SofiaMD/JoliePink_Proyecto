import React from "react";
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";

import NavigationContainer from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import JoliePinkLogin from "../screens/JoliePinkLogin";
import JoliePinkRegister from "../screens/JoliePinkRegister";
import JoliePinkHome from "../screens/JoliePinkHome"; 

const Tab = createBottomTabNavigator();



const TabBar = ({callback}) => {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Register" component={JoliePinkRegister} tabPress/>
            <Tab.Screen name="Login" component={JoliePinkLogin} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});

export default TabBar;

