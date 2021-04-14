import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";
import FlatListDress from "./FlatListDress";

const {width, height} = Dimensions.get("window");

const FlatListBlouses = ({navigation}) =>{

    const blouses = [
        {
            "id": 145,
            "nombre": "Blusa brillante espalda descubierta",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/NnSn1V3/Blusas1.jpg"
          },
          {
            "id": 2242,
            "nombre": "Blusa brillante espalda descubierta escote prolongado",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/rsydVMr/Blusas2.jpg"
          },
          {
            "id": 3242,
            "nombre": "Blusa larga floreada tirantes al cuello",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/ZKr8vz0/Blusas3.jpg"
          },
          {
            "id": 423,
            "nombre": "Blusa larga estilo hippie",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/sjDxSfv/Blusas4.jpg"
          },
          {
            "id": 523,
            "nombre": "Blusa espalda descubierta bordes plizados",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/Sc5Hhf5/Blusas5.jpg"
          },
          {
            "id": 623,
            "nombre": "Blusa manga al codo con detalles de flores",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/6B8SWmT/Blusas6.jpg"
          },
          {
            "id": 723,
            "nombre": "Blusa top de seda con listones transparentes",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/RSXZCQ9/Blusas7.jpg"
          },
          {
            "id": 823,
            "nombre": "Blusa manga al codo hombros descubiertos",
            "talla": ["xs","s","m","l","xl"],
            "precio": "700",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/NNF5zMD/blusa1.jpg"
          },
          {
            "id": 923,
            "nombre": "Blusa manga al codo un solo hombro",
            "talla": ["xs","s","m","l","xl"],
            "precio": "700",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/PGhD07V/blusa2.jpg"
          },
          {
            "id": 103223,
            "nombre": "Blusa de seda manga al codo",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/PQZny4R/blusa3.jpg"
          },
          {
            "id": 1231,
            "nombre": "Blusa floreada mangas largas al hombro",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/37vScgp/blusa4.jpg"
          },
          {
            "id": 1532,
            "nombre": "Blusa manga a los hombros y plices en botones",
            "talla": ["xs","s","m","l","xl"],
            "precio": "600",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/L5b5szt/blusa5.jpg"
          }
    ]

    return(
        <FlatList
        data = {blouses}
        keyExtractor = {(item) => item.id.toString()}
        renderItem ={({item}) =>{
                        return (
                            <View> 
                                <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                                nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla, categoriaPrenda: "blusas"})}}>
                                <Card style ={styles.cardImage}>
                                    {/* <Card.Title style= {styles.contenedorTitulo}>{item.nombre}</Card.Title> */}
                                        {/* <Card.Divider/>   */}
                                        <View style={styles.contenedorImagen}> 
                                           
                                         <Image source={{uri:`${item.imagen}`, }} 
                                            style ={styles.image}/>
                                            <Text>{}</Text>
                                            <View style= {styles.contenedorInformacion}>
                                                <Text>{item.nombre}</Text>    
                                                <Text>{}</Text>
                                                <Text>Precio: L.{item.precio}</Text> 
                                                <Text>{}</Text>
                                                {/* <Text>Tallas: {item.talla.map((index) =>( */}
                                                    <Text style={styles.texto}>
                                                    XS, S, M, L, XL
                                                    </Text>
                                                {/* ))}</Text> */}
                                                <Text>{}</Text>
                                                <View style={styles.contenedorBoton} >
                                                    <Text >Colores:</Text>
                                                    <TouchableOpacity
                                                        style={{
                                                            margin:1,
                                                            borderWidth:1,
                                                            borderColor:'#bd787d',
                                                            alignItems:'center',
                                                            justifyContent:'center',
                                                            width:20,
                                                            height:20,
                                                            backgroundColor:'#bd787d',
                                                            borderRadius:50,
                                                            }}
                                                        >
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={{
                                                            margin:1,
                                                            borderWidth:1,
                                                            borderColor:'rgba(0,0,0,0.2)',
                                                            alignItems:'center',
                                                            justifyContent:'center',
                                                            width:20,
                                                            height:20,
                                                            backgroundColor:'#fff',
                                                            borderRadius:50,
                                                            }}
                                                        >
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={{
                                                            margin:1,
                                                            borderWidth:1,
                                                            borderColor:'rgba(0,0,0,0.2)',
                                                            alignItems:'center',
                                                            justifyContent:'center',
                                                            width:20,
                                                            height:20,
                                                            backgroundColor:'#000000',
                                                            borderRadius:50,
                                                            }}
                                                        >
                                                    </TouchableOpacity>
                                                </View>
                                            </View>    
                                </View>
                               
                                     </Card>
                                </TouchableOpacity>
                            </View>
                        )
                    }}  
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#DED1DB"
    },
    image: {
        width: width * 0.40,
        height: height * 0.20
    },
    informacion:{
        fontWeight: "bold",
        marginTop: 5, 
        marginLeft: 5, 
        marginRight:5
    },
    contenedorImagen: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#DED1DB",
        // backgroundColor: "#bd787d",
       
    },
    contenedorBotones:{
        marginTop: 90,
        flexDirection: "row",
        marginLeft: 2
    },
    contenedorInformacion:{
        marginTop: 10,
        flexDirection: "column",
        marginLeft: 10
    },
    botonCompra:{
        marginTop: 10
    },
    contenedorBoton:{
        flexDirection: "row",
       
    },
    
});

export default FlatListBlouses;