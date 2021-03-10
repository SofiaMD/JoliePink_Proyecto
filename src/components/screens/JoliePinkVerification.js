import React, {useEffect} from "react";
import { StyleSheet, View, Dimensions, Text} from "react-native";

import Button from "../../components/shared/Button";
import { firebase } from "../../firebase";

// import VerificationUser from "../../utils/VerificationUser";

const JoliePinkVerification = ({navigation, route})=>{

    const  { correoElectronico} = route.params;


    useEffect(() => {
        Verificacion();
      }, []);

        const Verificacion =() =>{

            var provider = new firebase.auth.GoogleAuthProvider();
            // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


            const actionCodeSettings = {

                url: provider,

                handleCodeInApp: true
            };
                firebase
                .auth()
                .sendSignInLinkToEmail(correoElectronico, actionCodeSettings)
                .then(() => {
                console.log('sent')
                window.localStorage.setItem('emailForSignIn', correoElectronico);
                navigation.navigate("Home");

                })
                .catch(error => {
                console.log(error)
                });
        }
  
    return(
        <View style= {styles.container}>
            {/* <Text>{correoElectronico}</Text> */}
            <Text style= {styles.texto}>Pantalla de Verificación</Text>
            <Text style= {styles.textoCorreo}>{correoElectronico}</Text>
            <Button title="Verificar Correo Electronico" callback ={Verificacion()}/>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#f2d3ce",
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{   
        fontSize: 25,
        fontWeight: "bold",
        color: "#843d3b",
        marginBottom: 20,
        marginTop: -20
        
    },
    textoCorreo:{   
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        marginTop: -20
    },
});

export default JoliePinkVerification;