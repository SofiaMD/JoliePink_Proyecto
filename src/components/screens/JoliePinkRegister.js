import React from "react";
import { StyleSheet, View, Dimensions,Text, ImageBackground, TouchableOpacity } from "react-native";
import { Input} from 'react-native-elements';
import Register from "../forms/Register";
import theme from "../../theme";
import Alert from "../shared/Alert";

const {width, height} = Dimensions.get("window");

const JoliePinkRegister = ({navigation}) =>{
    // const { userCreated } = route.params;
    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image}>

                   {/* {userCreated ? (
                       <Alert type="success" title="Creado por el usuario! Ahora puedes iniciar sesión!" />
                    ) : null}  */}
                <Register navigation= {navigation}/>
                 <TouchableOpacity
                        onPress={() => {
                        navigation.goBack();
                        }} style = {styles.botonTouch}>
                        <Text style= {styles.texto1}>Si ya tienes una cuenta, inicia sesión</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
)}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        justifyContent: "center",
        // padding: 10,
        backgroundColor: theme.colors.backgroundWhite,
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
        marginTop: -50,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 50,
        width: width * 0.55,
        height: height * 0.07,
        // backgroundColor: "#fff"
    },
    texto1:{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    botonTouch:{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#fff",
        marginTop: 10,
        width: width * 0.7,
        height: height * 0.06
    }

});

export default JoliePinkRegister;