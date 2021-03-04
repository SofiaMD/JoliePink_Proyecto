import React from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground } from "react-native";
import { Input, } from 'react-native-elements';

import Button from "../../components/shared/Button";

const {width, height} = Dimensions.get("window");



const JoliePinkRegister = ({navigation}) =>{
    return(
        <View style = {styles.container}>
             <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image}>
                <Text style={styles.texto}>Registrate</Text>
            <View style= {styles.contenedorCentral}>
                
                <Input
                placeholder= "Nombre:"
                style={styles.input}/>
                <Input
                placeholder= "Correo Electronico:"
                style={styles.input}/>
               <Input
                placeholder= "Contraseña:"
                style={styles.input}/>
                <Input
                placeholder= "Confirmar Contraseña:"
                style={styles.input}/>
                <Input
                placeholder= "Telefono:"
                style={styles.input}/>
                <Input
                placeholder= "Dirección:"
                style={styles.input}/>
               
            </View>
            <View style= {styles.contenedorBoton}>
            <Button title = "Registrarse" callback ={() => {navigation.navigate("Home")}}/>
            </View>
        </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        alignItems: "center",
        justifyContent: "center"

    },

    contenedorCentral:{
        backgroundColor: "#ffff",
        width: width * 0.80,
        height: height *0.50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    
    contenedorBoton:{
       justifyContent: "center",
       alignItems: "center",
     
    },

    input:{
        width: width * 0.010,
        height: height *0.03,
        fontSize: 15,
    },

    texto:{
       
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 20,
        marginTop: -80
        
    },

    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },
});

export default JoliePinkRegister;