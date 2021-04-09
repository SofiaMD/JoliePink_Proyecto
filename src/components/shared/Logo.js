import React from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground,TouchableOpacity} from "react-native";

const {width, height} = Dimensions.get("screen");

const Logo = () =>{
    return(
        <View style = {styles.contenedorImagen}>
            <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 5,  
        marginTop: -200
    },
    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29,
        resizeMode: "contain",
    },
});

export default Logo;