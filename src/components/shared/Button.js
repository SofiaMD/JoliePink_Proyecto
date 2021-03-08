import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity, Touchable} from "react-native";

const {width,heigth} = Dimensions.get("window");

const Button = ({title, callback}) => {

    return (
        <TouchableOpacity onPress = {callback} style = {styles.boton}>
            <Text style = {styles.botonTexto}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    boton :{
        backgroundColor: "#843d3b",
        alignSelf: "center",
        padding: 10,
        borderRadius: 50,
        width: width * 0.50,
        // heigth: heigth * 1
    },
    botonTexto:{
        color: "#f2ebe8",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Button;