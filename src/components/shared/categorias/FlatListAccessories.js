import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";

const {width, height} = Dimensions.get("window");

const FlatListAccessories = ({navigation}) =>{

    const accessories = [
        {
            "id": 121,
            "nombre": "Bolso con agarradera pequeña y cadena",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/DWsgTp5/Bolso1.jpg"
          },
          {
              "id": 2234,
              "nombre": "Bolso con agarradera larga y cadena",
              "talla": ["xs","s","m","l","xl"],
              "precio": "800",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/jvFwpkw/Bolso2.jpg"
          },
          {
            "id": 32345,
            "nombre": "Bolso con agarradera mediada de cadena",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/SV1ZGJk/Bolso3.jpg"
          },
          {
            "id": 423,
            "nombre": "Conjunto de pulseras con dijes del oceano",
            "talla": ["xs","s","m","l","xl"],
            "precio": "500",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/DKTk7tZ/Pulseras.jpg"
          },
          {
            "id": 5232,
            "nombre": "Sombrero playero unicolor",
            "talla": ["xs","s","m","l","xl"],
            "precio": "500",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/F8p3SSp/Sombrero.jpg"
          },
          {
            "id": 723,
            "nombre": "Sombrero playero con rayas",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/XSg3X3z/Sombrero2.jpg"
          },
          {
            "id": 237,
            "nombre": "Conjunto de collares con pequeños dijes",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/qj6jgrt/Collares1.jpg"
          },
          {
          "id": 823,
          "nombre": "Diademas delagadas con perlas",
          "talla": ["xs","s","m","l","xl"],
          "precio": "400",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/9r76GbV/accesorio1.jpg"
        },
        {
          "id": 924,
          "nombre": "Pasadores de perlas variados",
          "talla": ["xs","s","m","l","xl"],
          "precio": "200",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/4pf2G6w/accesorio2.jpg"
        },
        {
          "id": 1024,
          "nombre": "Pasadores de oceano bañados en oro ",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1000",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/M7wKWjJ/accesorio3.jpg"
        },
        {
          "id": 1123,
          "nombre": "Lentes borde de punta",
          "talla": ["xs","s","m","l","xl"],
          "precio": "500",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/xMNqwj1/accesorio4.jpg"
        },
        {
          "id": 1223,
          "nombre": "Lentes con forma de labios",
          "talla": ["xs","s","m","l","xl"],
          "precio": "600",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/9pBZz4t/accesorio5.jpg"
        }
      ]

    return(      
        <FlatList
        data = {accessories}
        keyExtractor = {(item) => item.id.toString()}
        renderItem ={({item}) =>{
                        return (
                            <View> 
                                <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                                nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla, categoriaPrenda: "accesorios"})}}>
                                <Card style ={styles.cardImage}>
                                    {/* <Card.Title style= {styles.contenedorTitulo}>{item.nombre}</Card.Title> */}
                                        {/* <Card.Divider/>   */}
                                        <View style={styles.contenedorImagen}> 
                                           
                                         <Image source={{uri:`${item.imagen}`, }} 
                                            style ={styles.image}/>
                                            <Text>{}</Text>
                                            <View style= {styles.contenedorInformacion}>
                                                <Text style={styles.texto}>{item.nombre}</Text>    
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
    texto:{
        fontSize: 15
    }
});

export default FlatListAccessories;