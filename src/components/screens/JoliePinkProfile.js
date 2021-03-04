import React from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground} from "react-native";

 import Button from "../shared/Button"
 


const {width, height} = Dimensions.get("screen");

const JoliePinkProfile = ({navigation}) =>{
    return(
        <ImageBackground source = {require ("../../../assets/FondoPerfil.jpg")}
         style = {styles.image} >
         <View style = {styles.contenedorImagen}>
             <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
         </View>
         <View style = {styles.contenedorInformacion}>
             <Text>Sofia Duarte</Text>
             <Text>sofiaduarte@gmail.com</Text>
             <Text>99468291</Text>
             <Text>Siguatepeque, Comayagua</Text>
         </View>
         <View style= {styles.contenedorBoton}>
         <Button title = "Cerrar sesion" callback ={() => {navigation.navigate("Login")}}/>
         </View>
         </ImageBackground> 
        
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
        height: height * 1
    },
    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,  
        marginTop: -200
    },
    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29
    },
    contenedorBoton:{
        marginTop: 30
    }
  
});

export default JoliePinkProfile;