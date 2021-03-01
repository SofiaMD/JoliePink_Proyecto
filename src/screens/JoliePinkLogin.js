import React from "react";
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground} from "react-native";

import {
    Input
} from "react-native-elements";

 import Button from "../components/Button"

const {width, height} = Dimensions.get("screen");

const JoliePinkLogin = ({navigation}) =>{

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../assets/FondoInicio.jpg")}
            style = {styles.image} >
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
            <Button title = "Iniciar Sesion" callback ={() => {navigation.navigate("SpecificCategory")}}/>
            </View>
            </ImageBackground>
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
    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },
    contenedorInformacion:{
        backgroundColor: "#fff",
        width: width * 0.70,
        height: height * 0.20,
        justifyContent: "center"
    },
    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,  
        marginTop: -100
    },
    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29
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