import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkLogin = () =>{

    return(
        <View style = {styles.container}>
            <Text>
                Holis Bienvenido
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
export default JoliePinkLogin;