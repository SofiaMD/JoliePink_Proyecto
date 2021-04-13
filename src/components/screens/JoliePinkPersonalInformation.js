import React,{useContext} from "react";
import {StyleSheet,View,Text,ImageBackground,Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

import { Context as  AuthContext} from "../../providers/AuthContext";

import PersonalInformation from "../forms/PersonalInformation";
import Logo from "../shared/Logo";

const JoliePinkPersonalInformation = ({navigation}) =>{

    const { signout } = useContext(AuthContext);
    return(
        <ImageBackground source = {require ("../../../assets/FondoPerfil.jpg")} style = {styles.image}>
                <Logo/>
                <PersonalInformation navigation= {navigation}/>
        </ImageBackground>
    );
        
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems: "center"
    },
    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },

})

export default JoliePinkPersonalInformation;