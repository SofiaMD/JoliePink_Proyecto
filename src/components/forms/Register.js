import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground } from "react-native";
import { Input, } from 'react-native-elements';

import Button from "../../components/shared/Button";

import { firebase } from "../../firebase";
import { validate } from "email-validator";
import Alert from "../shared/Alert";
const {width, height} = Dimensions.get("window");

const Register = () => {

    // Variables a utilizar 
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");

    // Variables de errores 
    const [nombreError, setNombreError] = useState(false);
    const [correoError, setCorreoError] = useState(false);
    const [contraseñaError, setContraseñaError] = useState(false);
    const [confirmarContraseñaError, setConfirmarContraseñaError] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = (input) =>{
        if(input === "nombreCompleto"){
            if(!nombreCompleto) setNombreError(true);
            else setNombreError(false);
        }
        else if(input === "correoElectronico"){
            
            if(!correoElectronico) setCorreoError(true);
            else if (!validate(correoElectronico)) setCorreoError(true);
            else setCorreoError(false);
        }
        else if(input === "contraseña"){
            
            if(!contraseña) setContraseñaError(true);
            else if (contraseña.length < 6) setContraseñaError(true);
            else setContraseñaError(false);
        }
        else if(input === "confirmarContraseña"){
            
            if(!confirmarContraseña) setConfirmarContraseñaError(true);
            else if (confirmarContraseña !== contraseña) setConfirmarContraseñaError(true);
            else setConfirmarContraseñaError(false);
        }
    };


    const handlerSignUP = () =>{
        firebase
            .auth()
            .createUserWithEmailAndPassword(correoElectronico, contraseña)
            .then((response) => console.log(response))
            .catch((error) => {
            setError(error.message);
            });
    }

    return(
        <View>
            {error ? <Alert title={error} type="error"/> : null} 
            <View style= {styles.contenedorTexto}> 
                <Text style={styles.texto}>Registrate</Text>
            </View>
                <View style= {styles.contenedorCentral}>
                <Input
                    placeholder= "Nombre Completo:"
                    leftIcon={{ name: 'person' }}
                    value= {nombreCompleto}
                    onChangeText ={setNombreCompleto}
                    onBlur={() => {
                        handleVerify("nombreCompleto");
                      }}
                      errorMessage={
                        nombreError ? "Por favor ingrese su nombre completo" : ""
                      }
                    style={styles.input}/>
                <Input
                    placeholder= "Correo Electronico:"
                    leftIcon={{ name: 'email' }}
                    value= {correoElectronico}
                    onChangeText ={setCorreoElectronico}
                    autoCapitalize ="none"
                    onBlur={() => {
                        handleVerify("correoElectronico");
                      }}
                      errorMessage={
                        correoError ? "Por favor ingrese una dirección de correo válida" : ""
                      }
                    style={styles.input}/>
                <Input
                    placeholder= "Contraseña:"
                    leftIcon={{ name: 'lock' }}
                    value= {contraseña}
                    onChangeText ={setContraseña}
                    secureTextEntry
                    autoCapitalize ="none"
                    onBlur={() => {
                        handleVerify("contraseña");
                      }}
                      errorMessage={
                        contraseñaError ? "Por favor ingrese una contraseña de mínimo 6 caracteres" : ""
                      }
                    style={styles.input}/>
                <Input
                    placeholder= "Confirmar Contraseña:"
                    leftIcon={{ name: 'lock' }}
                    value= {confirmarContraseña}
                    onChangeText ={setConfirmarContraseña}
                    secureTextEntry
                    autoCapitalize ="none"
                    onBlur={() => {
                        handleVerify("confirmarContraseña");
                      }}
                      errorMessage={
                        confirmarContraseñaError ? "Por favor reingrese su contraseña y verifique que sea correcta" : ""
                      }
                    style={styles.input}/>
                </View>
                <View style= {styles.contenedorBoton}>
                    <Button title = "Registrarse" callback ={handlerSignUP}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        alignItems: "center",
        justifyContent: "center"

    },

    contenedorCentral:{
        backgroundColor: "#ffff",
        width: width * 0.80,
        height: height *0.40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    
    contenedorBoton:{
       justifyContent: "center",
       alignItems: "center",
     
    },

    input:{
        width: width * 0.010,
        height: height *0.03,
        fontSize: 20,
    },
    contenedorTexto:{
        justifyContent: "center",
        alignItems: "center",
    },

    texto:{
        color:"#ffff",
        fontSize: 35,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 20,
        marginTop: -80, 
    },
    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1,
        resizeMode: "contain"
    },

});

export default Register;

