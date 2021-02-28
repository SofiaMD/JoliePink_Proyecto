import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const {width, height} = Dimensions.get("window");

const JoliePinkHome = () =>{
    return(
        <SafeAreaProvider >
            
            <Header 
                centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
                containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around', 
                  } }
            />
            <View style={styles.container}> 
            <View style={styles.contenedorRopa}> 
                Contenedor Rapa
            </View>
            <View style={styles.contenedorBotones}>
                Contenedor Botones
            </View>
            <View style={styles.contendorImagen}>
                contendor Imagen
            </View>
            </View>
        </SafeAreaProvider> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9ece9"
    },

    contenedorRopa:{
        backgroundColor: "#ded1db",
        width: width * 1,
        height: height *0.30,
    },

    contenedorBotones:{
        backgroundColor: "#d4b2b3",
        width: width * 1,
        height: height *0.30,
    },
    
    contenedorImagen:{
        backgroundColor: "#bd787d",
        width: width * 1,
        height: height *0.30,
    }
});

export default JoliePinkHome;