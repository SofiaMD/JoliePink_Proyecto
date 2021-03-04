import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkRegister = ({}) =>{
    return(
        <View style = {styles.container}>
            <Text>
                Holis Registrate
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

export default JoliePinkRegister;