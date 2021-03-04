import React from "react";
import { StyleSheet, View,Dimensions, Image, ImageBackground} from "react-native";

import {
    Input
} from "react-native-elements";

<<<<<<< HEAD:src/components/forms/Login.js
// Importacion de componentes compatidos
=======
import Button from "../../components/shared/Button";
>>>>>>> 097cd422870ed3397370168a0034d3a2b2841427:src/components/screens/JoliePinkLogin.js

import Button from "../../components/Button";

const {width, height} = Dimensions.get("screen");

const Login = () => {
    return (
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
            style = {styles.image} >
            <View style = {styles.contenedorImagen}>
                <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
            </View>
            <View style = {styles.contenedorInformacion}>
            <Input
                placeholder='Correo Electronico'
                style = {styles.inputUsuario}
                leftIcon={{ name: 'email' }}
            />
            <Input
                placeholder='Contraseña'
                style = {styles.inputUsuario}
                leftIcon={{ name: 'lock' }}
            />
            </View>
<<<<<<< HEAD:src/components/forms/Login.js
=======
            <View style= {styles.contenedorBoton}>
            <Button title = "Iniciar Sesion" callback ={() => {navigation.navigate("Register")}}/>
            </View>
>>>>>>> 097cd422870ed3397370168a0034d3a2b2841427:src/components/screens/JoliePinkLogin.js
            </ImageBackground>
        </View>
    );
};

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
    }
  

});

export default Login;


