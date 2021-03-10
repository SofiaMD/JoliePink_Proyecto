import React, {useState, useEffect} from "react";
import { StyleSheet, View,Dimensions, Image, ImageBackground} from "react-native";

import {
    Input,
    Text
} from "react-native-elements";

// Importacion de componentes compartidos
import Button from "../../components/shared/Button";
import Alert from "../shared/Alert";

import { firebase } from "../../firebase";
import { validate } from "email-validator";
const {width, height} = Dimensions.get("window");

const Login = ({navigation}) => {

    const [correoElectronico, setCorreoElectronico] = useState("");

    const [contrasena, setContrasena] = useState("");

    // Errores de las variables
    const [correoElectronicoError, setCorreoElectronicoError] = useState(false);
    const [contrasenaError, setContrasenaError] = useState(false);
    const [error, setError] = useState("");
    
    const handlerSignUP =()=>{
        firebase
        .auth()
        .signInWithEmailAndPassword(correoElectronico, contrasena)
        .then((response) => {
            // Obtener el Unique Identifier generado para cada usuario
            // Firebase -> Authentication
            const uid = response.user.uid;

            // Obtener la colección desde Firebase
            const usersRef = firebase.firestore().collection("users");

            // Verificar que el usuario existe en Firebase authentication
            // y también está almacenado en la colección de usuarios.
            usersRef
            .doc(uid)
            .get()
            .then((firestoreDocument) => {
                if (!firestoreDocument.exists) {
                setError("User does not exist in the database!");
                return;
                }

                // Obtener la información del usuario y enviarla a la pantalla Home
                const user = firestoreDocument.data();
                navigation.navigate("Home", {user});
            });
            
        })
        .catch((error) => {
            console.log(error);
            setError(error.message);
        });
    };

    const handleVerify = (input) => {
        if (input === "correoElectronico") {
          if (!correoElectronico) setCorreoElectronicoError(true);
          else if (!validate(correoElectronico)) setCorreoElectronicoError(true);
          else setCorreoElectronicoError(false);
        } else if (input === "contrasena") {
          if (!contrasena) setContrasenaError(true);
          else setContrasenaError(false);
        }
      };

    return (
        <View>
            <View style = {styles.contenedorImagen}>
                <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")}/>
            </View>
            {error ? <Alert type="error" title={error} /> : null}
            <View style = {styles.contenedorInformacion}>
            <Input
                placeholder='Correo Electronico'
                style = {styles.inputUsuario}
                leftIcon={{ name: 'email' }}
                value = {correoElectronico}
                onChangeText = {setCorreoElectronico}
                onBlur={() => {
                    handleVerify("correoElectronico");
                  }}
                  errorMessage={
                   correoElectronicoError
                      ? "Por favor ingresa tu cuenta de correo electrónico"
                      : null
                  }
            />
            <Input
                placeholder='Contraseña'
                style = {styles.inputUsuario}
                leftIcon={{ name: 'lock' }}
                value = {contrasena}
                onChangeText= {setContrasena}
                secureTextEntry
                autoCapitalize ="none"
                onBlur={() => {
                    handleVerify("contrasena");
                  }}
                  errorMessage={
                   contrasenaError
                      ? "Por favor ingresa tu cuenta de correo electrónico"
                      : null
                  }
            />
            </View>
            <View style= {styles.texto}>
                    <Text>¿Has olvidado tu contraseña?</Text>
            </View>
            <View style= {styles.contenedorBoton}>
                 <Button title = "Iniciar Sesion" callback ={handlerSignUP}/>
            </View>
        </View>
    );
};

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
        height: height * 1,
        resizeMode: "contain",
        height: height * 1
    },
    contenedorInformacion:{
        backgroundColor: "#fff",
        width: width * 0.70,
        height: height * 0.18,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },
    contenedorImagen: {
        width: width * 0.70,
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
        // marginLeft: 80,
        // marginRight:80
    },
    contenedorRegistro: {
        backgroundColor: "#fff",
        width: width * 0.50,
        height: height * 0.10
    },
    contenedorBoton:{
        marginTop: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    texto:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
  

});

export default Login;


