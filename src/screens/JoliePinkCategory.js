import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "../components/TabBar"

const Tab = createBottomTabNavigator();

const JoliePinkCategory = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <Text>
                Estas Categoria Son
            </Text>
            <Text>
                Estas Categoria Son
            </Text>
            <TabBar callback ={() => {navigation.navigate("Home")}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    }

});

export default JoliePinkCategory;