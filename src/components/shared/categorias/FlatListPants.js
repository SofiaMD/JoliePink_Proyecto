import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";


const {width, height} = Dimensions.get("window");

const FlatListPants = ({navigation}) =>{

    const pants = [
        {
            "id": 1,
            "nombre": "Pantalon olgado a la cintura",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/rbS6Jzx/Pantalon1.jpg"
          },
          {
             "id": 2,
             "nombre": "Pantalon olgado estilo culotte",
             "talla": ["xs","s","m","l","xl"],
             "precio": "800",
             "color":["rosa","blanco","negro","amarillo"],
             "imagen": "https://i.ibb.co/YX71DXJ/Pantalon2.jpg"
          },
          {
            "id": 3,
            "nombre": "Pantalon estilo culotte con faja a la cintura",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/cT4zBVR/Pantalon3.jpg"
          },
          {
            "id": 4,
            "nombre": "Pantalon estilo culotte plizado",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/N3STgMb/Pantalon4.jpg"
          },
          {
            "id": 5,
            "nombre": "Pantalon olgado floreado",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/QMjW84F/Pantalon5.jpg"
          },
          {
            "id": 6,
            "nombre": "Pantalon olgado a la cintura",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/QMLBp09/Pantalon6.jpg"
          },
          {
            "id": 7,
            "nombre": "Pantalon estilo culotte largo a la cintura",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/4NKc5x4/Pantalon7.jpg"
          },
          {
          "id": 8,
          "nombre": "Jean a la cintura",
          "talla": ["xs","s","m","l","xl"],
          "precio": "800",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/mNT5sv1/pantalon1.jpg"
        },
        {
          "id": 9,
          "nombre": "Jean a la cintura roto en las rodillas",
          "talla": ["xs","s","m","l","xl"],
          "precio": "700",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/GT2ccwp/pantalon2.jpg"
        },
        {
          "id": 10,
          "nombre": "Jean a la cintura con bolsas",
          "talla": ["xs","s","m","l","xl"],
          "precio": "900",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/1KRKb3J/pantalon3.jpg"
        },
        {
          "id": 11,
          "nombre": "Pantalon casual a la cintura con faja",
          "talla": ["xs","s","m","l","xl"],
          "precio": "800",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/TLyjSkm/pantalon4.jpg"
        },
        {
          "id": 12,
          "nombre": "Pantalo con cadena casual",
          "talla": ["xs","s","m","l","xl"],
          "precio": "900",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/9cCgvvy/pantalon5.jpg"
        },
    ]

    return (
        <FlatList
        data = {pants}
        keyExtractor = {(item) => item.id.toString()}
        renderItem ={({item}) =>{
                        return (
                            <View> 
                                <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                                nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla, categoriaPrenda: "Pantalones"})}}>
                                <Card style ={styles.cardImage}>
                                    {/* <Card.Title style= {styles.contenedorTitulo}>{item.nombre}</Card.Title> */}
                                        {/* <Card.Divider/>   */}
                                        <View style={styles.contenedorImagen}> 
                                           
                                         <Image source={{uri:`${item.imagen}`, }} 
                                            style ={styles.image}/>
                                            <Text>{}</Text>
                                            <View style= {styles.contenedorInformacion}>
                                                <View style={styles.contenedorNombre}>
                                                        <Text style={styles.nombreTexto}>{item.nombre}</Text> 
                                                 </View>    
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
        height: height * 0.30
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
    },
    contenedorNombre:{
        width: width * 0.40,
      
    },
    nombreTexto:{
        fontSize: 16
    },
    
});

export default FlatListPants;



