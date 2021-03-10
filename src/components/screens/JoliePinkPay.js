import React from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground , Image} from "react-native";
import { Input, Divider} from 'react-native-elements';

import Button from "../../components/shared/Button";

const {width, height} = Dimensions.get("window");



const JoliePinkPay = () =>{
    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
            style = {styles.image}>
            <View style = {styles.contenedorImagen}>
                <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")} />
            </View>
            <Text style={styles.texto}>Detalles Tajeta de Credito</Text>
            <View style= {styles.contenedorCentral}>
                <Input
                placeholder= "Nombre:"
                style={styles.input}/>
                <Input
                placeholder= "Numero de Tarjeta:"
                style={styles.input}/>
                <Input
                placeholder= "MM:"
                style={styles.input}/>
                 <Input
                placeholder= "YYYY:"
                style={styles.input}/>
                 <Input
                placeholder= "CSV:"
                style={styles.input}
                />
            </View>
            <View style= {styles.contenedorBoton}>
            <Button title = "Pagar" callback ={() => {navigation.navigate("Home")}}/>
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
        width: width * 0.90,
        height: height *0.41,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },

    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,  
        marginTop: -55
    },

    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29,
        resizeMode: "contain",
    },
    
    contenedorBoton:{
       justifyContent: "center",
       alignItems: "center",
       marginTop: 40
    },

    input:{
        marginTop: 2,
        width: width * 0.01,
        height: height *0.03,
        fontSize: 15,
    },

    texto:{
       
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 20,
        marginTop: -20
        
    },

    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },
});


export default JoliePinkPay;