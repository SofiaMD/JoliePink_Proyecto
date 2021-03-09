import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, ImageBackground} from "react-native";
import {Input} from "react-native-elements";
import Button from "../../components/shared/Button";

const {width, height} = Dimensions.get("screen");

const JoliePinkForgotPassword = ({navigation}) =>{

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
                />
                <Input 
                    placeholder='Confirmacion correo electronico'
                    style = {styles.inputConfirmacionCorreo}
                />
                </View>
                <View style= {styles.contenedorBoton}>
                <Button title = "Enviar codigo" callback ={() => {navigation.navigate("ChangePassword")}}/>
                </View>
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
        marginTop: -130
    },
    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29
    },
    texto:{
        color:"#ffff",
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 20 
    },
    contenedorBoton:{
        marginTop: 30
    }
  

});
export default JoliePinkForgotPassword;