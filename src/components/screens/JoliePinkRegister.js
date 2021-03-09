import React from "react";
<<<<<<< HEAD
import { StyleSheet, View, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { Input,Text} from 'react-native-elements';

import Button from "../../components/shared/Button";
import Register from "../forms/Register";
import theme from "../../theme";
import Alert from "../shared/Alert";

const {width, height} = Dimensions.get("window");

const JoliePinkRegister = ({navigation, route}) =>{
    const { userCreated } = route.params;
    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image}>
                   {userCreated ? (
                       <Alert type="success" title="Creado por el usuario! Ahora puedes iniciar sesión!" />
                    ) : null} 
                <Register/>
                {/* <TouchableOpacity style = {styles.contenedorBoton} 
                    onPress ={() => {navigation.navigate("Home")}} >
                </TouchableOpacity> */}
            </ImageBackground>
=======
import { StyleSheet, View, Text } from "react-native";

const JoliePinkRegister = () =>{
    return(
        <View style = {styles.container}>
            <Text>
                Holis Registrate
            </Text>
>>>>>>> d5d5b235a54d5c46c21702c1edbd1c4f63a69e5f
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
<<<<<<< HEAD
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        justifyContent: "center",
        padding: 10,
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
=======
        flexDirection: "column"
    }
>>>>>>> d5d5b235a54d5c46c21702c1edbd1c4f63a69e5f

});

export default JoliePinkRegister;