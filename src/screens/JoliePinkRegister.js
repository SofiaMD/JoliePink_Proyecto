import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Input, } from 'react-native-elements';

const {width, height} = Dimensions.get("window");



const JoliePinkRegister = () =>{
    return(
        <View style = {styles.container}>
            <Text style= {styles.texto}>Registrate</Text>
            <View style= {styles.contenedorCentral}>
                <View style= {styles.contenedorInformacion}>
                <Input
                placeholder= "Nombre:"
                style={styles.input}/>
                <Input
                placeholder= "Correo Electronico:"
                style={styles.input}/>
                <Input
                placeholder= "Correo Electronico:"
                style={styles.input}/>
               <Input
                placeholder= "Contraseña:"
                style={styles.input}/>
                <Input
                placeholder= "Confirmar Contraseña::"
                style={styles.input}/>
                <Input
                placeholder= "Telefono:"
                style={styles.input}/>
                <Input
                placeholder= "Dirección:"
                style={styles.input}/>
                </View>
            </View>
            <Text>Boton</Text>
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
        width: width * 0.90,
        height: height *0.65,
    },
    
    contenedorInformacion:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
       
    },
    input:{
        width: width * 0.30,
        height: height *0.07,
        
    },

    texto:{
        marginBottom: 30,
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b"
    }
});

export default JoliePinkRegister;