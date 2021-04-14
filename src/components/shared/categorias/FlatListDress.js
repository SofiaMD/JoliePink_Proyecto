import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";

const {width, height} = Dimensions.get("window");

const FlatListDress = ({navigation}) =>{

    const dress = [
            {
              "id": 1876523,
              "nombre": "vestido 1",
              "talla": ["xs","s","m","l","xl"],
              "precio": "800",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/fvB95hC/vestidos.jpg"
            },
            {
                "id": 2234234,
                "nombre": "vestido 2",
                "talla": ["xs","s","m","l","xl"],
                "precio": "800",
                "color":["rosa","blanco","negro","amarillo"],
                "imagen": "https://i.ibb.co/d2pr22c/vestidos2.jpg"
            },
            {
              "id": 3213232,
              "nombre": "Vestido 3",
              "talla": ["xs","s","m","l","xl"],
              "precio": "900",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/j8RJpj9/vestidos3.jpg"
            },
            {
              "id": 4214234,
              "nombre": "vestido 4",
              "talla": ["xs","s","m","l","xl"],
              "precio": "900",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/vdrtwnH/vestidos4.jpg"
            },
            {
              "id": 5422342,
              "nombre": "vestido 5",
              "talla": ["xs","s","m","l","xl"],
              "precio": "900",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/2ZTx3L1/vestidos5.jpg"
            },
            {
              "id": 61241241,
              "nombre": "Vestido 6",
              "talla": ["xs","s","m","l","xl"],
              "precio": "1000",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/26w9R4B/vestidos6.jpg"
            },
            {
              "id": 7124124,
              "nombre": "Vestido  7",
              "talla": ["xs","s","m","l","xl"],
              "precio": "1000",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/VtZTnbT/vestidos7.jpg"
            }
    ]

    return(
        <FlatList
        data = {dress}
        keyExtractor = {(item) => item.id.toString()}
        renderItem ={({item}) =>{
                        return (
                            <View> 
                                <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                                nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla, categoriaPrenda: "vestidos"})}}>
                                <Card style ={styles.cardImage}>
                                    {/* <Card.Title style= {styles.contenedorTitulo}>{item.nombre}</Card.Title> */}
                                        {/* <Card.Divider/>   */}
                                        <View style={styles.contenedorImagen}> 
                                           
                                         <Image source={{uri:`${item.imagen}`, }} 
                                            style ={styles.image}/>
                                            <Text>{}</Text>
                                            <View style= {styles.contenedorInformacion}>
                                                <Text>Nombre: {item.nombre}</Text>    
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

export default FlatListDress;