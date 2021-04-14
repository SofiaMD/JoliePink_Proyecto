import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";

const {width, height} = Dimensions.get("window");

const FlatListJackets = ({navigation}) =>{

    const jackets = [
        {
            "id": 1,
            "nombre": "Chaqueta estilo artesanal semiformal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/vmvTGsp/Chaquetas1.jpg"
          },
          {
              "id": 2,
              "nombre": "Chaqueta estilo artesanal casual",
              "talla": ["xs","s","m","l","xl"],
              "precio": "800",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/QXjvhHF/Chaquetas2.jpg"
          },
          {
            "id": 3,
            "nombre": "Chaqueta tipo blaser formal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/s2hhN5W/Chaquetas3.jpg"
          },
          {
            "id": 4,
            "nombre": "Chaqueta rayada con estilo artesanal en borde",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/KhjyCPh/Chaquetas4.jpg"
          },
          {
            "id": 5,
            "nombre": "Chaqueta tipo blaser con encaje floreado formal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/rfWZC5D/Chaquetas5.jpg"
          },
          {
            "id": 6,
            "nombre": "Chaqueta tipo blaser con encaje triangular formal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/JvJ4Pqy/Chaquetas6.jpg"
          },
          {
            "id": 7,
            "nombre": "Chaqueta tipo blaser encaje variado formal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/L0d9QRW/Chaquetas7.jpg"
          },
          {
          "id": 8,
          "nombre": "Chaqueta estilo casual floreada",
          "talla": ["xs","s","m","l","xl"],
          "precio": "900",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/bsXt7x7/chaqueta1.jpg"
        },
        {
          "id": 9,
          "nombre": "Chaqueta terciopelo brillante casual",
          "talla": ["xs","s","m","l","xl"],
          "precio": "900",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/jDL7syV/chaqueta2.jpg"
        },
        {
          "id": 10,
          "nombre": "Chaqueta brilante liso",
          "talla": ["xs","s","m","l","xl"],
          "precio": "900",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/RCPNdn1/chaqueta3.jpg"
        },
        {
          "id": 11,
          "nombre": "Chaqueta de cuero casual",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1000",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/2jX0NB3/chaqueta4.jpg"
        },
        {
          "id": 12,
          "nombre": "Chaqueta terciopelo casual",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1000",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/kcS9RFY/chaqueta5.jpg"
        }
        ]
    return(

        <FlatList
        data = {jackets}
        keyExtractor = {(item) => item.id.toString()}
        renderItem ={({item}) =>{
                        return (
                            <View> 
                                <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                                nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla,categoriaPrenda: "chaquetas"})}}>
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

export default FlatListJackets;