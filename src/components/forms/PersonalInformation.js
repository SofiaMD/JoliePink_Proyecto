import React, {useState,useEffect,useContext} from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";

import { Context as PersonalInformationContext} from "../../providers/PersonalInformationContext";
import { Context as AuthContext} from "../../providers/AuthContext";


import {Input, Button} from "react-native-elements";

import Alert from "../shared/Alert";

const {width, height} = Dimensions.get("window");

const PersonalInformation =({navigation}) =>{

    const {createPersonalInformation,clearMessage} = useContext(PersonalInformationContext);
    const {state} = useContext(AuthContext);

    // Variables a Utilizar
    const [direccion, setDireccion] = useState("");
    const [telefono,setTelefono] = useState("");
    const [codigoPostal, setCodigoPostal] =useState("");

    //Variables de errores

    const [direccionError,setDireccionError] = useState(false);
    const [telefonoError,setTelefoError] = useState(false);
    const [codigoPostalError, setCodigoPostalError] = useState(false);

    const [error,setError] = useState("");

    // Funcion de verificacion de informacion 
    const handleVerify = (input) =>{
        if(input ==="direccion"){
            if(!direccion) setDireccionError(true);
            else setDireccionError(false);
        }
        else if(input === "telefono"){
            let primerCaracter = telefono.slice(0, 1)
            console.log(primerCaracter)
            if(!telefono) setTelefoError(true);
            else if(telefono.length != 8) setTelefoError(true)
            else setTelefoError(false);
        }
        else if (input === "codigoPostal"){
            if(!codigoPostal) setCodigoPostalError(true)
            else if(codigoPostal.length != 5) setCodigoPostalError(true)
            else setCodigoPostalError(false);
        }
        clearMessage();
    }
    

    const  handleSaveInformation = () =>{
        createPersonalInformation(direccion,telefono,codigoPostal, state.user.id);
        navigation.navigate("Home");
    }
     return (
         <View>
             {error ? <Alert title={error} type="error"/> : null}
             <View style={styles.contenedorTexto}>
                 <Text style= {styles.texto}>Ingresa tus datos</Text>
             </View>
             <View style={styles.contenedorCentral}>
                 <Input 
                        placeholder= "Dirección"
                        value={direccion}
                        onChangeText={setDireccion}
                        onBlur ={() =>{
                            handleVerify("direccion")
                        }}
                        errorMessage = {
                            direccionError ? "Ingrese una direccion" : ""
                        }
                    />
                    <Input
                        placeholder= "Teléfono"
                        value= {telefono}
                        onChangeText ={setTelefono}
                        onBlur={() => {
                                handleVerify("telefono");
                            }}
                            errorMessage={
                                telefonoError ? "Por favor ingrese un numero de telefono valido " : ""
                            }
                    style={styles.input}/>
                    <Input
                        placeholder= "Código Postal"
                        value= {codigoPostal}
                        onChangeText ={setCodigoPostal}
                        onBlur={() => {
                                handleVerify("codigoPostal");
                            }}
                            errorMessage={
                                telefonoError ? "Por favor un codigo Postal " : ""
                            }
                    style={styles.input}/>
                    <Button
                        title =  "Guardar datos"
                        onPress={handleSaveInformation}
                    >
                    </Button>

             </View>


         </View>
     )
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"red"

    },
    input:{
        width: width * 0.10,
        height: height *0.03,
        fontSize: 20,
    },
    contenedorCentral:{
        // backgroundColor: "#ffff",
        width: width * 0.80,
        height: height *0.30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginTop:10
    },
    texto:{
        fontSize:20,
        marginBottom:10
    },
    contenedorTexto:{
        width: width * 0.80,
        // height: height *0.30,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom:15,
    }
});


export default PersonalInformation;