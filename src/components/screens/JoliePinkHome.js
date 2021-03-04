import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkHome = () =>{
    return(
        <View style = {styles.container}>
            <Text>
                Holis Este es el inicio
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    }

});

export default JoliePinkHome;