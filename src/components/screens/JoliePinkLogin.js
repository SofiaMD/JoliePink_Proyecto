import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Image, ImageBackground, TouchableOpacity} from "react-native";

import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
    Input,
    Text
} from "react-native-elements";
// Importacion de componentes

 import Button from "../shared/Button";
 import Login from "../forms/Login"
//  import Login from "../shared/Login";
import theme from "../../theme";


const {width, height} = Dimensions.get("window");

const JoliePinkLogin = ({navigation, route}) =>{
    const { userCreated } = route.params;
    return(
        <SafeAreaProvider>
            <Header
                placement="right"
                rightComponent = {<Button title = "Registrate" callback ={() => {navigation.navigate("Register")}}/>}
                containerStyle = {{backgroundColor : "#f2d3ce" , justifyContent : 'space-around',  border: 0, borderBottomColor: "#f2d3ce"} }
            />
            <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image} >
                    <Login navigation={navigation}/>
                    {userCreated ? (
                <Alert type="success" title="User created! You can now sign in!" />
            ) : null}
            </ImageBackground>
        </View>
        </SafeAreaProvider>
    );

}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor : "#f2d3ce",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.backgroundWhite,
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
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 50,
      width: width * 0.55,
      height: height * 0.07,
    //   backgroundColor: "#fff",

    },
    texto:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: -75,
        // backgroundColor: "#fff",
        width: width * 0.55,
        height: height * 0.03
    }
  

});
export default JoliePinkLogin;
