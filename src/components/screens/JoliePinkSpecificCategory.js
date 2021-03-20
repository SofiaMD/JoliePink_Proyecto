import React from "react";
import { StyleSheet, View, Text } from "react-native";

import CardList from "../shared/CardList";

const JoliePinkSpecificCategory = () =>{
    return(
        <View style = {styles.container}>
            <CardList titulo= "Bolsos"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#DED1DB"
    }

});

export default JoliePinkSpecificCategory;