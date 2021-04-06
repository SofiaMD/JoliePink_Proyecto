import React, {useState}from "react";
import {StyleSheet, View, Text, Dimensions, Image, ImageBackground,TouchableOpacity} from "react-native";
import {Input} from "react-native-elements";
import Button from "../../components/shared/Button";

import { firebase } from "../../firebase";

const {width, height} = Dimensions.get("screen");

const JoliePinkForgotPassword = ({navigation}) =>{

    const [correoElectronico, setCorreoElectronico] = useState("");

    const enviarCorreo = ()=>{
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(correoElectronico)
        .then(function(){
            console.log("Se mando un correo");
            navigation.navigate("Login");
        },function(error){
            console.log(error)
        })
    }

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
            style = {styles.image}>
                <View style={styles.contenedorImagen}>
                    <Image style={styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
                </View>
                <Text style={styles.texto}>Recuperar contraseña</Text>
                <View style = {styles.contenedorInformacion}>
                <Input 
                    placeholder='Correo electronico'
                    style = {styles.inputCorreo}
                    value = {correoElectronico}
                    onChangeText ={setCorreoElectronico}
                />
                </View>
                <View style= {styles.contenedorBoton}>
                <Button title = "Enviar codigo" callback ={enviarCorreo}/>
                </View>
                <TouchableOpacity
                    onPress ={() => {navigation.navigate("Login")}}>
                         <Text style= {styles.textoMensaje}>¿No deseas cambiar contraseña?Intenta Iniciar sesion</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
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
    },
    contenedorInformacion:{
        backgroundColor: "#fff",
        width: width * 0.70,
        height: height * 0.20,
        justifyContent: "center"
    },
    contenedorImagen: {
        width: width * 0.65,
        // width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -50,  
        // marginTop: -150,
        
    },
    imagenLogo:{
        width: width * 0.58,
        height: height * 0.29,
        resizeMode: "contain",
    },
    texto:{
        color:"#ffff",
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 10,
        marginTop: 30
    },
    textoMensaje:{
        marginTop: 10
    },
    contenedorBoton:{
        marginTop: 30
    }
  

});
export default JoliePinkForgotPassword;