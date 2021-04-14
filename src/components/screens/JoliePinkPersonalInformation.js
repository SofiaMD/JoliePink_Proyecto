import React,{useContext} from "react";
import {StyleSheet,View,Text,ImageBackground,Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

import { Context as  AuthContext} from "../../providers/AuthContext";

import PersonalInformation from "../forms/PersonalInformation";
import Logo from "../shared/Logo";

const JoliePinkPersonalInformation = ({navigation}) =>{

    const { signout } = useContext(AuthContext);
    return(
        <View style= {styles.container}>
        <ImageBackground source = {require ("../../../assets/FondoPerfil.jpg")} style = {styles.image}>
                <View style= {styles.contendorLogo}>
                <Logo/>
                </View>
               
                <PersonalInformation navigation= {navigation}/>
        </ImageBackground>
        </View>
    );
        
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        // alignContent:"center",
        // alignItems: "center"
    },
    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },
    contendorLogo:{
        marginTop:90
    }

})

export default JoliePinkPersonalInformation;