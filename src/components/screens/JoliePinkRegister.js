import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkRegister = ({}) =>{
    return(
        <View style = {styles.container}>
             <ImageBackground source = {require ("../../../assets/FondoInicio.jpg")}
                style = {styles.image}>
                <Text style={styles.texto}>Registrate</Text>
            <View style= {styles.contenedorCentral}>
                <Input
                placeholder= "Nombre:"
                style={styles.input}/>
                <Input
                placeholder= "Correo Electronico:"
                style={styles.input}/>
               <Input
                placeholder= "Contraseña:"
                style={styles.input}/>
                <Input
                placeholder= "Confirmar Contraseña:"
                style={styles.input}/>
                <Input
                placeholder= "Telefono:"
                style={styles.input}/>
                <Input
                placeholder= "Dirección:"
                style={styles.input}/>
               
            </View>
            <View style= {styles.contenedorBoton}>
            <Button title = "Registrarse" callback ={() => {navigation.navigate("Pay")}}/>
            </View>
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    }

});

export default JoliePinkRegister;