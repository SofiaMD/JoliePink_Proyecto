import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkHome = () =>{
    return(
        <SafeAreaProvider>
            <Header 
                centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
                containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around', 
                  } }
            />
            <View style={styles.container}> 
                <View style={styles.contenedorRopa}> 
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa1.jpg")}/>
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa2.jpg")}/>
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa3.jpg")}/>
                    <Image style= {styles.imagenropa} source = {require("../../../assets/ropa3.jpg")}/>
                </View>
                <Text style={styles.textoNueva}>Nueva Colección</Text>
                    <View style={styles.contenedorBotones}>
                    <Button title="Lo mas Vendido" callback ={() => {navigation.navigate("Home")}}/>
                    <Button title="Nueva Colección" callback ={() => {navigation.navigate("Home")}}/>
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
    }

});

export default JoliePinkHome;