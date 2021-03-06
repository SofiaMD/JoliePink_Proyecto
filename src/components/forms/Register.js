import React, {useState, useEffect,useContext} from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground } from "react-native";
import { Input,Button } from 'react-native-elements';
import { Context as AuthContext } from "../../providers/AuthContext";

// import Button from "../../components/shared/Button";

import { firebase } from "../../firebase";
import { validate } from "email-validator";
import Alert from "../shared/Alert";
const {width, height} = Dimensions.get("window");

const Register = ({navigation}) => {

    const { state, signup,clearErrorMessage } = useContext(AuthContext);

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
    // const [direccion,setDireccion] =useState(false);
    // const [telefono,]
    const [error, setError] = useState("");

    useEffect(() => {
        if (state.errorMessage) clearErrorMessage();
      }, []);
    
      useEffect(() => {
        if (state.errorMessage) setError(state.errorMessage);
      }, [state.errorMessage]);
    
      useEffect(() => {
        if (state.registered) navigation.navigate("Home");
      }, [state]);


      

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
        else if (input === "signup") {
            if (
              !nombreError &&
              !correoError &&
              !contraseñaError &&
              !confirmarContraseñaError &&
             nombreCompleto &&
              correoElectronico &&
              contraseña &&
              confirmarContraseña
            )
              signup(nombreCompleto, correoElectronico,contraseña);
            else setError("All fields are required!");
          }
    };

   
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
                    {/* <Button title = "Registrarse" callback ={handleVerify()}/> */}
                    <Button
                      // mode="contained"
                      style={styles.boton}
                      onPress={() => handleVerify("signup")}
                      title =  "Registrarse"
                    >
                    </Button>
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
        justifyContent: "center",
        resizeMode: "contain"
        // position:"absolute"

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
    boton :{
      backgroundColor: "#bd787d",
      alignSelf: "center",
      padding: 10,
      borderRadius: 50,
      width: width * 0.50,
      // heigth: heigth * 1
    },
    botonTexto:{
        color: "#f2ebe8",
        fontSize: 20,
        // fontWeight: "bold",
        textAlign: "center"
    }

});

export default Register;

