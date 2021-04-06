import React, {useContext}from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Dimensions,Image, TouchableOpacity } from "react-native";
import { Header, } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Context as  AuthContext} from "../../providers/AuthContext";

const {width, height} = Dimensions.get("window");


import Button from "../../components/shared/Button";
// import { useContext } from "react";

const JoliePinkHome = ({navigation}) =>{

    const { signout } = useContext(AuthContext);
    return(
        <SafeAreaProvider>
            <Header 
                centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
                containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
            />
            <View style={styles.container}> 
                <View style={styles.contenedorRopa}> 
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa1.jpg")}/>
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa2.jpg")}/>
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa3.jpg")}/>
                </View>
                <Text style={styles.textoNueva}>Nueva Colección</Text>
                    <View style={styles.contenedorBotones}>
                    <Button title="Lo más vendido" callback ={() => {navigation.navigate("Pay")}}/>
                    <Button title="Nueva colección" callback ={() => {navigation.navigate("Home")}}/>
                    </View>
                    <View style={styles.contenedorImagen}>
                        <Image style= {styles.imagenRopa} source = {require("../../../assets/ropa.jpg")}/>
                        <Image style= {styles.imagenRopa} source = {require("../../../assets/ropa4.jpg")}/>
                    </View>
                  
                    
            </View>
        </SafeAreaProvider> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    },
    contenedorRopa:{
        flexDirection: "row",
        width: width * 1,
        height: height *0.30,
        marginTop: 10
    },

    contenedorBotones:{
        width: width * 1,
        height: height *0.12,
        flexDirection: "row"
    },
    
    contenedorImagen:{
        flexDirection: "row",
        width: width * 1,
        height: height *0.40,
    },

    imagenropa:{
        width: width * 0.37,
        height: height *0.30,
    },

    imagenRopa:{
        width: width * 0.50,
        height: height *0.40,
    },

    textoNueva: {
        color: "#21130d",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 4,

        fontSize: 25
    }

});

export default JoliePinkHome;