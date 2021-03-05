import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground } from "react-native";
import { Input, } from 'react-native-elements';

import Button from "../../components/shared/Button";

const {width, height} = Dimensions.get("window");

const Register = () => {

    // Variables a utilizar 
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    // Variables de errores 
    const [nombreError, setNombreError] = useState(false);
    const [correoError, setCorreoError] = useState(false);
    const [contraseñaError, setContraseñaError] = useState(false);
    const [confirmarContraseñaError, setConfirmarContraseñaError] = useState(false);
    const [error, setError] = useState("");

    const handleVerity = (input) =>{
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




    return(
        <View>
            <View style= {styles.contenedorTexto}> 
                <Text style={styles.texto}>Registrate</Text>
            </View>
                <View style= {styles.contenedorCentral}>
                <Input
                    placeholder= "Nombre Completo:"
                    leftIcon={{ name: 'person' }}
                    value= {nombreCompleto}
                    onChange ={setNombreCompleto}
                    onBlur={() => {
                        handleVerify("nombreCompleto");
                      }}
                      errorMessage={
                        emailError ? "Por favor ingrese su nombre completo" : ""
                      }
                    style={styles.input}/>
                <Input
                    placeholder= "Correo Electronico:"
                    leftIcon={{ name: 'email' }}
                    value= {correoElectronico}
                    onChange ={setCorreoElectronico}
                    onBlur={() => {
                        handleVerify("correoElectronico");
                      }}
                      errorMessage={
                        emailError ? "Por favor ingrese una dirección de correo válida" : ""
                      }
                    
                    style={styles.input}/>
                <Input
                    placeholder= "Contraseña:"
                    leftIcon={{ name: 'lock' }}
                    value= {contraseña}
                    onChange ={setContraseña}
                    onBlur={() => {
                        handleVerify("contraseña");
                      }}
                      errorMessage={
                        emailError ? "Por favor ingrese una contraseña de mínimo 6 caracteres" : ""
                      }
                    style={styles.input}/>
                <Input
                    placeholder= "Confirmar Contraseña:"
                    leftIcon={{ name: 'lock' }}
                    value= {confirmarContraseña}
                    onChange ={setConfirmarContraseña}
                    onBlur={() => {
                        handleVerify("confirmarContraseña");
                      }}
                      errorMessage={
                        emailError ? "Por favor reingrese su contraseña y verifique que sea correcta" : ""
                      }
                    style={styles.input}/>
                    <Input
                    placeholder= "Telefono:"
                    leftIcon={{ name: 'phone' }}
                    value= {telefono}
                    onChange ={setTelefono}
                    style={styles.input}/>
                    <Input
                    placeholder= "Dirección:"
                    leftIcon={{ name: 'place' }}
                    value= {direccion}
                    onChange ={setDireccion}
                    style={styles.input}/>
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
        height: height *0.50,
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
        fontSize: 15,
    },
    contenedorTexto:{
        justifyContent: "center",
        alignItems: "center",
    },

    texto:{
        color:"#ffff",
        fontSize: 25,
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

