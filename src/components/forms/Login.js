import React, {useState, useEffect} from "react";
import { StyleSheet, View,Dimensions, Image, ImageBackground} from "react-native";

import {
    Input
} from "react-native-elements";

// Importacion de componentes compatidos
import Button from "../../components/shared/Button";

const {width, height} = Dimensions.get("screen");

const Login = () => {

    const [correoElectronio, setCorreoElectronico] = useState("");

    const [contrasena, setContrasena] = useState("");

    const [error, setError] = useState("");
    return (
        <View>
            <View style = {styles.contenedorImagen}>
                <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
            </View>
            <View style = {styles.contenedorInformacion}>
            <Input
                placeholder='Correo Electronico'
                style = {styles.inputUsuario}
                leftIcon={{ name: 'email' }}
                value = {correoElectronio}
                onChange = {setCorreoElectronico}
            />
            <Input
                placeholder='Contraseña'
                style = {styles.inputUsuario}
                leftIcon={{ name: 'lock' }}
                value = {contrasena}
                onChange = {setContrasena}
            />
            </View>
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
        height: height * 1,
        resizeMode: "contain",
        height: height * 1
    },
    contenedorInformacion:{
        backgroundColor: "#fff",
        width: width * 0.70,
        height: height * 0.20,
        justifyContent: "center",
        alignItems: "center",
    },
    contenedorImagen: {
        width: width * 0.70,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,  
        marginTop: -100
    },
    imagenLogo:{
        width: width * 0.58,
        height: height * 0.29,
        resizeMode: "contain",
        // marginLeft: 80,
        // marginRight:80
    },
    contenedorRegistro: {
        backgroundColor: "#fff",
        width: width * 0.50,
        height: height * 0.10
    },
    contenedorBoton:{
        marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    texto:{
        alignItems: "center",
        justifyContent: "center",
    }
  

});

export default Login;


