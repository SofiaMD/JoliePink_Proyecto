import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import { Input,Text} from 'react-native-elements';

import Button from "../../components/shared/Button";
import Register from "../forms/Register";

const {width, height} = Dimensions.get("window");

const JoliePinkRegister = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image}>
                <Register/>
                    <Button title = "Registrarse" callback ={() => {navigation.navigate("Home")}}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        justifyContent: "center",
        padding: 10

    },

    contenedorCentral:{
        backgroundColor: "#ffff",
        width: width * 0.80,
        height: height *0.50,
        justifyContent: "center",
        alignItems: "center"
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
        color:"#ffff",
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
        height: height * 1,
        resizeMode: "contain"
    },
    contenedorBoton:{
      alignItems: "center",
      justifyContent: "center",
    },

});

export default JoliePinkRegister;