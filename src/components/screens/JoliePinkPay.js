import React,{useState,useEffect,useContext}from "react";
import { StyleSheet, View, Text, Dimensions, ImageBackground , Image, Alert} from "react-native";
import { Input, Divider} from 'react-native-elements';

import Button from "../../components/shared/Button";
import Logo from "../shared/Logo";

const {width, height} = Dimensions.get("window");


import { Context as AuthContext} from "../../providers/AuthContext";
import { Context as PurchaseContext} from "../../providers/PurchaseContext";

import Toast from "react-native-toast-message";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const JoliePinkPay = ({navigation,route}) =>{

    const { createPurchase} = useContext(PurchaseContext);
    const {state} = useContext(AuthContext);

    // Variables a utilizar
    const {id,nombre,precio,cantidad,talla,color,img,total} = route.params;
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
    const [error, setError] = useState("");


        const toastConfig = {
        success: ({ text1, props, ...rest }) => (
          <View style={{ width: width * 0.8, backgroundColor:"#f2d3ce"}}>
            <TouchableOpacity style = {{backgroundColor:"#f2d3ce", width: width * 0.8}}
            onPress = {() => navigation.navigate("Home")}
            >
                    {/* <Logo/> */}
            <Text style = {{fontSize:30}}>{text1}</Text>
            </TouchableOpacity>
            
            {/* <Text>{props.guid}</Text> */}
          </View>
        )
      };
      

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
            // else if(año < digitoAño) setAñoError(true)
            else setAñoError(false);
        }
        else if (input === "CSV"){
            if(!CSV) setCSVError(true)
            else if(CSV.length != 3) setCSVError(true)
            else setCSVError(false);
        }
        else if (input === "purchase") {
            if (
              !nombreTarjetaError &&
              !numeroTarjetaError &&
              !mesError &&
              !añoError &&
              !CSVError  
            ){
                 createPurchase(id,nombre,precio,cantidad,talla,color,img,total, state.user.id);   
                Alert.alert(
                   "Compra Realizada",
                    "Gracias Por Su Compra",
                    [
                      { text: "OK", onPress: () => {navigation.navigate("Home")} }
                    ]
                  );
            }
            else setError("Se requieren estos datos para continuar!");
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
            {/* <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} /> */}
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
            <Button title = "Pagar" callback ={() => handleVerify("purchase")}/>
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
        height: height *0.50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },

    contenedorImagen: {
        width: width * 0.52,
        height: height * 0.35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,  
        // backgroundColor:"red",
        marginTop: 5
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
        // marginBottom: 20,
        marginTop: -20
        
    },

    image: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
        width: width * 1,
        height: height * 1
    },
    estiloMensaje:{
        backgroundColor: "#f2d3ce",
        height: height * 0.60,
        width: width * 0.80
    }
});


export default JoliePinkPay;