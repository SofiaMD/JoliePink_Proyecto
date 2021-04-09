import React,{useState,useEffect}from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground , Image} from "react-native";
import { Input, Divider} from 'react-native-elements';

import Button from "../../components/shared/Button";

const {width, height} = Dimensions.get("window");

const JoliePinkPay = () =>{

    // Variables a utilizar
    const [nombreTarjeta, setNombreTarjeta] = useState("");
    const [numeroTarjeta,setNumeroTarjeta] = useState("");
    const [mes, setMes] = useState("");
    const [año, setAño] = useState("");
    const [CSV, setCSV] = useState("");

    // Variables de error
    const [nombreTarjetaError, setNombreTarjetaError] = useState(false);
    const [numeroTarjetaError,setNumeroTarjetaError] = useState(false);
    const [mesError, setMesError] = useState(false);
    const [añoError, setAñoError] = useState(false);
    const [CSVError, setCSVError] = useState(false);

    const handleVerify = (input) =>{
        if(input ==="nombreTarjeta"){
            if(!nombreTarjeta) setNombreTarjetaError(true);
            else setNombreTarjetaError(false);
        }
        else if(input === "numeroTarjeta"){
            if(!numeroTarjeta) setNumeroTarjetaError(true);
            else if(numeroTarjeta.length != 16) setNumeroTarjetaError(true)
            else setNumeroTarjetaError(false);
        }
        else if (input === "mes"){
            if(!mes) setMesError(true)
            else if(mes < 0) setMesError(true)
            else if(mes > 12) setMesError(true)
            else setMesError(false);
        }
        else if (input === "año"){
            var today = new Date();
            var year = today.getFullYear(); 
            let digitoAño = "year".slice(2, 4)
            console.log(year)
            if(!año) setAñoError(true)
            else if(año < digitoAño) setAñoError(true)
            else setAñoError(false);
        }
        else if (input === "CSV"){
            if(!CSV) setCSVError(true)
            else if(mes.length != 5) setCSVError(true)
            else setCSVError(false);
        }
    }

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
            style = {styles.image}>
            <View style = {styles.contenedorImagen}>
                <Image style= {styles.imagenLogo} source = {require("../../../assets/Logo.png")} />
            </View>
            <Text style={styles.texto}>Detalles Tajeta de Credito</Text>
            <View style= {styles.contenedorCentral}>
                <Input
                    placeholder= "Nombre:"
                    value= {nombreTarjeta}
                    onChangeText= {setNombreTarjeta}
                    onBlur ={() =>{
                        handleVerify("nombreTarjeta")
                    }}
                    errorMessage = {
                        nombreTarjetaError ? "Ingrese el nombre de la targeta" : ""
                    }
                    style={styles.input}
                />
                <Input
                    placeholder= "Numero de Tarjeta:"
                    value = {numeroTarjeta}
                    onChangeText ={setNumeroTarjeta}
                    onBlur ={() =>{
                        handleVerify("numeroTarjeta")
                    }}
                    errorMessage = {
                        numeroTarjetaError ? "Ingrese un numero de targeta valido" : ""
                    }
                    style={styles.input}
                />
                <Input
                    placeholder= "MM:"
                    value = {mes}
                    onChangeText ={setMes}
                    onBlur ={() =>{
                        handleVerify("mes")
                    }}
                        errorMessage = {
                            mesError ? "Ingrese un mes valido" : ""
                    }
                    style={styles.input}
                />
                 <Input
                    placeholder= "YYYY:"
                    value = {año}
                    onChangeText ={setAño}
                    onBlur ={() =>{
                        handleVerify("año")
                    }}
                        errorMessage = {
                            añoError ? "Ingrese un año valido" : ""
                    }
                    style={styles.input}/>
                 <Input
                    placeholder= "CSV:"
                    value = {CSV}
                    onChangeText ={setCSV}
                    onBlur ={() =>{
                        handleVerify("CSV")
                    }}
                        errorMessage = {
                            CSVError ? "Ingrese un codigo valido" : ""
                    }
                style={styles.input}
                />
            </View>
            <View style= {styles.contenedorBoton}>
            <Button title = "Pagar" callback ={() => {navigation.navigate("Home")}}/>
            </View>
        </ImageBackground>
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
        width: width * 0.90,
        height: height *0.45,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },

    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2,  
        // marginTop: -55
    },

    imagenLogo:{
        width: width * 0.52,
        height: height * 0.29,
        resizeMode: "contain",
    },
    
    contenedorBoton:{
       justifyContent: "center",
       alignItems: "center",
       marginTop: 5
    },

    input:{
        marginTop: 2,
        width: width * 0.01,
        height: height *0.03,
        fontSize: 15,
    },

    texto:{
       
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 20,
        marginTop: -20
        
    },

    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },
});


export default JoliePinkPay;