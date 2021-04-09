import React,{useState,useContext,useEffect}from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground,TouchableOpacity,FlatList} from "react-native";

import Button from "../shared/Button";
import { firebase }  from "../../firebase";
import UserInformation from "../shared/UserInformation";

import {Context as AuthContext} from "../../providers/AuthContext";
import {Context as PersonalInformationContext} from "../../providers/PersonalInformationContext";

const {width, height} = Dimensions.get("screen");

const JoliePinkProfile = ({navigation}) =>{
    
    const {state, signout } = useContext(AuthContext);
    const { state: personalInformationState,getPersonalInformation, clearMessage } = useContext(PersonalInformationContext);

    useEffect(()=>{
        getPersonalInformation(state.user.id);
    },[]);

    useEffect(()=>{
        console.log(personalInformationState);
    },[personalInformationState])

    const SignOff = () =>{
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
            // An error happened.
        });
    };
    return(
        <ImageBackground source = {require ("../../../assets/FondoPerfil.jpg")}
         style = {styles.image} >
         <View style = {styles.contenedorImagen}>
             <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
         </View>
         <View style = {styles.contenedorInformacion}>
             {/* <Text>Sofia Duarte</Text>
             <Text>sofiaduarte@gmail.com</Text> */}
             <UserInformation personalsInformation={personalInformationState.personalsInformation} navigation={navigation}/>
         </View>
         <View style= {styles.contenedorBoton}>
         <Button title = "Cerrar sesion" callback ={SignOff}/>
         </View>
         <TouchableOpacity onPress= {() => {navigation.navigate("PersonalInformation")}}>
            <Text>Agregar Datos Personales</Text>
            </TouchableOpacity>
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
        height: height * 0.29,
        resizeMode: "contain",
    },
    contenedorBoton:{
        marginTop: 30
    }
  
});

export default JoliePinkProfile;