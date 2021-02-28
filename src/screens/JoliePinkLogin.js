import React from "react";
import { StyleSheet, View, Text, Dimensions, Image} from "react-native";

import {
    Input
} from "react-native-elements";

 import Button from "../components/Button"

const {width, height} = Dimensions.get("screen");

const JoliePinkLogin = ({navigation}) =>{

    return(
        <View style = {styles.container}>
            <View style = {styles.contenedorImagen}>
                <Image style= {styles.imagenLogo} source = {require("../../assets/Logo.png")}/>
            </View>
            <View style = {styles.contenedorInformacion}>
            <Input
                placeholder='Usuario'
                style = {styles.inputUsuario}
            />
            <Input
                placeholder='Contraseña'
                style = {styles.inputUsuario}
            />
            </View>
            <View style= {styles.contenedorBoton}>
            <Button title = "Iniciar Sesion" callback ={() => {navigation.navigate("Home")}}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor : "#f2d3ce",
        alignItems: "center",
        justifyContent: "center"
    },
    contenedorInformacion:{
        backgroundColor: "#fff",
        width: width * 0.70,
        height: height * 0.30,
        justifyContent: "center"
    },
    contenedorImagen: {
        backgroundColor: "#fff",
        width: width * 0.50,
        height: height * 0.28,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        borderRadius: 110  
    },
    imagenLogo:{
        width: width * 0.50,
        height: height * 0.25
    },
    contenedorRegistro: {
        backgroundColor: "#fff",
        width: width * 0.50,
        height: height * 0.10
    },
    contenedorBoton:{
        marginTop: 30
    }
  

});
export default JoliePinkLogin;