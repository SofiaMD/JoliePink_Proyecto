import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";

// import fetchJoliePinkCategories from "../../api/index";


const {width, height} = Dimensions.get("window");

import CardList from "../shared/CardList";

const JoliePinkSpecificCategory = ({navigation}) =>{

    const [categories, setCategories] = useState([]);
    const [ error, setError ] = useState(false);


    // useEffect (() => {
     
    //     handlerData();
    
    //   }, []);

    // const handlerData = ()=>{

    //     const getCategories = async () =>{

    //         const newCategorie = await fetchJoliePinkCategories();
             
    //         setCategories(newCategorie);
    
    //         // console.log(setCategories);
    
    //         console.log("hola")
               
    //     };

    //     getCategories();

    // }

    const dress = [
            {
              "id": 13435,
              "nombre": "Bolso 1",
              "talla": [
                  "xs","s","m","l","xl"
              ],
              "precio": "800",
              "color":[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
              "imagen": "https://i.ibb.co/DWsgTp5/Bolso1.jpg"
            },
            {
                "id": 22424,
                "nombre": "Bolso 2",
                "talla": [
                    "xs","s","m","l","xl"
                ],
                "precio": "800",
                "color":[
                    "rosa",
                    "blanco",
                    "negro",
                    "amarillo"
                ],
                "imagen": "https://i.ibb.co/jvFwpkw/Bolso2.jpg"
            },
            {
              "id": 3242,
              "nombre": "Bolso 3",
              "talla": [
                  "xs","s","m","l","xl"
              ],
              "precio": "900",
              "color":[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
                ],
              "imagen": "https://i.ibb.co/SV1ZGJk/Bolso3.jpg"
            },
            {
              "id": 4244,
              "nombre": "Pulsera",
              "talla": [
                  "xs","s","m","l","xl"
              ],
              "precio": "500",
              "color":[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
              "imagen": "https://i.ibb.co/DKTk7tZ/Pulseras.jpg"
            },
            {
              "id": 524242,
              "nombre": "Sombrero 1",
              "talla": [
                  "xs","s","m","l","xl"
              ],
              "precio": "500",
              "color":[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
              "imagen": "https://i.ibb.co/qj6jgrt/Collares1.jpg"
            },
            {
              "id": 7242342,
              "nombre": "Sombrero 2",
              "talla": [
                  "xs","s","m","l","xl"
              ],
              "precio": "1000",
              "color":[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
              "imagen": "https://i.ibb.co/XSg3X3z/Sombrero2.jpg"
            },
            {
              "id": 824242,
              "nombre": "Collares 1",
              "talla": [
                  "xs","s","m","l","xl"
              ],
              "precio": "1000",
              "color":[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
              "imagen": "https://i.ibb.co/qj6jgrt/Collares1.jpg"
            }
          ]

    
        
    return(
    //   <View>
    //         <Text>Hola</Text>
    //   </View>
        
    <FlatList
    data = {dress}
    keyExtractor = {(item) => item.id.toString()}
    renderItem ={({item}) =>{
                    return (
                        <View> 
                            <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                            nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla})}}>
                            <Card style ={styles.cardImage}>
                                {/* <Card.Title style= {styles.contenedorTitulo}>{item.nombre}</Card.Title> */}
                                    {/* <Card.Divider/>   */}
                                    <View style={styles.contenedorImagen}> 
                                       
                                     <Image source={{uri:`${item.imagen}`, }} 
                                        style ={styles.image}/>
                                        <View style= {styles.contenedorInformacion}>
                                            <Text>{item.nombre}</Text> 
                                            <Text>{"\n"}</Text>  
                                            <Text>{item.precio}</Text> 
                                            <Text>{"\n"}</Text>  
                                            <Text>{item.talla.map((index) =>(
                                                <Text style={styles.texto}>
                                                {" "}{index}
                                                </Text>
                                            ))}</Text>
                                        </View>    
                                        <View style= {styles.contenedorBotones}>
                                        <TouchableOpacity >
                                                        <MaterialCommunityIcons 
                                                            name="shopping" 
                                                            color= {"#bd787d"} 
                                                            size={35} />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                        <MaterialCommunityIcons 
                                                            name="cart"  
                                                            color= {"#bd787d"} 
                                                            size={35} />
                                            </TouchableOpacity>
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
    }

});

export default JoliePinkSpecificCategory;