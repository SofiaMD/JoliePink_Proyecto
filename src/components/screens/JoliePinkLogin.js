import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Image, ImageBackground, TouchableOpacity} from "react-native";

import {
    Input,
    Text
} from "react-native-elements";
// Importacion de componentes

 import Button from "../shared/Button";
 import Login from "../forms/Login"
//  import Login from "../shared/Login";

const {width, height} = Dimensions.get("screen");

const JoliePinkLogin = ({navigation}) =>{


    // const [correoElectronio, setCorreoElectronico] = useState("");

    // const [contrasena, setContrasena] = useState("");

    // const [error, setError] = useState("");

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image} >
                    <Login/>
                <TouchableOpacity style= {styles.texto}>
                    <Text>¿Has olvidado tu contraseña?</Text>
                </TouchableOpacity>
                <View style= {styles.contenedorBoton}>
                    <Button title = "Iniciar Sesion" callback ={() => {navigation.navigate("Register")}}/>
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
        height: height * 1,
        resizeMode: "contain",
        height: height * 1
    },
    contenedorInformacion:{
        backgroundColor: "#fff",
        width: width * 0.70,
        height: height * 0.20,
        justifyContent: "center"
    },
    contenedorImagen: {
        width: width * 0.60,
        width: width * 0.52,
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
        width: width * 0.52,
        height: height * 0.29
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
        marginTop: 10
    }
  

});
export default JoliePinkLogin;
