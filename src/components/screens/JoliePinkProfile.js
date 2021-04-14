import React,{useState,useContext,useEffect}from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground,TouchableOpacity,FlatList,TextInput} from "react-native";
import {Header} from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from "../shared/Button";
import Toast from "react-native-toast-message";
import { firebase }  from "../../firebase";
import UserInformation from "../shared/UserInformation";

import {Context as AuthContext} from "../../providers/AuthContext";
import {Context as PersonalInformationContext} from "../../providers/PersonalInformationContext";

import {Context as UserContext} from "../../providers/UserContext";

import Logo from "../shared/Logo";

const {width, height} = Dimensions.get("screen");

const JoliePinkProfile = ({navigation}) =>{
    
    const {state, signout } = useContext(AuthContext);
    const { state: personalInformationState,getPersonalInformation, clearMessage } = useContext(PersonalInformationContext);

    const {state: userState,getUser} = useContext(UserContext);

    const [nombre,setNombre] = useState("");
    const [correo,setCorreo] = useState("");

    useEffect(()=>{
    
            getPersonalInformation(state.user.id);
            // getUser(state.user.id);
       
    },[]);

    useEffect(()=>{
        if(personalInformationState.errorMessage){
            
           clearMessage();
        }

    },[personalInformationState.errorMessage]);
   

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
        <>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <View style= {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoPerfil.jpg")}
            style = {styles.image} >
            <SafeAreaProvider>
                <Header 
                rightComponent={
                    <TouchableOpacity style= {styles.botonCompras}
                        onPress = {() => {navigation.navigate("Purchases")}}>
                        <Text style = {styles.botonTexto}>Mis Compras</Text>
                    </TouchableOpacity>}
                    containerStyle = { {backgroundColor : '#f2d3ce' , borderBottomColor: "#f2d3ce"} }/>
                <View style = {styles.contenedorCentral}>
                    <Logo/>
                    <UserInformation personalsInformation={personalInformationState.personalsInformation} 
                    navigation={navigation}/>
                </View> 
            <View style= {styles.contenedorBoton}>
            <Button title = "Cerrar sesion" callback ={SignOff}/>
            </View>
            </SafeAreaProvider>
            </ImageBackground> 
         </View>
         </>
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
        // height: height * 1
    },
    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,  
        // marginTop: -200
    },
    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29,
        resizeMode: "contain",
    },
    contenedorBoton:{
        marginTop: 10
    },
    contenedorCentral:{
        marginTop: 150,
        alignItems: "center",
        justifyContent: "center",
        alignContent:"center",
        // backgroundColor: "red"
        // marginTop: 100
    },
    botonCompras: {
        width:width *0.3,
        height: height * 0.05,
        backgroundColor: "#bd787d",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    botonTexto:{
        color: "#f2ebe8",
        fontSize: 15,
        // fontWeight: "bold",
        textAlign: "center"
    }
  
});

export default JoliePinkProfile;