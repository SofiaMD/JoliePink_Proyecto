import React from "react";
import {StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native";

import {Button} from "react-native-elements";
const {width,heigth} = Dimensions.get("window");

const ButtonCategory = ({title, callback}) => {
    return (
        <TouchableOpacity style = {styles.boton}  onPress = {callback}>
            <Text style = {styles.botonTexto}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor : "#bd787d", 
        justifyContent: "center",
        width: width * 0.45,
        heigth: heigth * 0.05,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    botonTexto:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default ButtonCategory;