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
            "id": 1323,
            "nombre": "Vestido corto con puntos pequeños",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/fvB95hC/vestidos.jpg"
          },
          {
              "id": 2675,
              "nombre": "Vestido corto floreado formal",
              "talla": ["xs","s","m","l","xl"],
              "precio": "800",
              "color":["rosa","blanco","negro","amarillo"],
              "imagen": "https://i.ibb.co/d2pr22c/vestidos2.jpg"
          },
          {
            "id": 3785,
            "nombre": "Vestido corto manga-larga floreado casual",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/j8RJpj9/vestidos3.jpg"
          },
          {
            "id": 4343,
            "nombre": "Vestido corto ceñido a cuerpo formal floreado",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/vdrtwnH/vestidos4.jpg"
          },
          {
            "id": 5342,
            "nombre": "Vestido corto manga larga estilo playero",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/2ZTx3L1/vestidos5.jpg"
          },
          {
            "id": 6225,
            "nombre": "Vestido largo estilo playero",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/26w9R4B/vestidos6.jpg"
          },
          {
            "id": 7434,
            "nombre": "Vestido  largo manga corta estilo playero",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/VtZTnbT/vestidos7.jpg"
          },
          {
          "id": 823,
          "nombre": "Vestido corto ceñido al cuerpo con tirantes",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1000",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/TtsqCNf/vestido1.jpg"
        },
        {
          "id": 9238,
          "nombre": "Vestido de seda corto ceñido al cuerpo con tirantes ",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1100",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/5jWHC8M/vestido2.jpg"
        },
        {
          "id": 1390,
          "nombre": "Vestido de seda corto ceñido al cuerpo con agarres",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1100",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/pXdT2yb/vestido3.jpg"
        },
        {
          "id": 131,
          "nombre": "Vestido largo ceñido al cuerpo corte en la pierna",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1200",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/68gp0pS/vestido4.jpg"
        },
        {
          "id": 12342,
          "nombre": "Vestido medio ceñido al cuerpo corte en la pierna",
          "talla": ["xs","s","m","l","xl"],
          "precio": "1200",
          "color":["rosa","blanco","negro","amarillo"],
          "imagen": "https://i.ibb.co/BP39kq1/vestido5.jpg"
        },
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

export default FlatListDress;