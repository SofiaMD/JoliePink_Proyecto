import React from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity,Button } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";

const {width, height} = Dimensions.get("window");

import CardList from "../shared/CardList";

const JoliePinkSpecificCategory = ({navigation}) =>{
    const dress = [
        {
            id: 1,
            nombre: "Traje de Baño 1",
            talla: [
                "xs","s","m","l","xl"
            ],
            precio: "700",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/0VMWxZ0/bikini1.jpg"
          },
          {
            id: 2,
            nombre: "Traje de Baño 2",
            talla: [
                "xs","s","m","l","xl"
            ],
            precio: "600",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/G3Y2B59/bikini2.jpg"
          },
          {
            id: 3,
            nombre: "Traje de Baño 3",
            talla: [
                "xs","s","m","l","xl"
            ],
            precio: "700",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/vqcdNj9/bikini3.jpg"
          },
          {
            id: 4,
            nombre: "Traje de Baño 4",
            talla: [
                "xs","s","m","l","xl"
            ],
            precio: "700",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/jf1gpkb/bikini4.jpg"
          },
          {
            id: 5,
            nombre: "Traje de Baño 5",
            talla: [
                "xs","s","m","l","xl"
            ],
            precio: "700",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/Jydjp2S/bikini5.jpg"
          },
          {
            id: 6,
            nombre: "Traje de Baño 6",
            talla: [
                "xs","s","m","l","xl"
            ],
            precio: "800",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/Jy04vcY/bikini6.jpg"
          },
          {
            id: 7,
            nombre: "Traje de Baño 7",
            talla : [
                "xs","s","m","l","xl"
            ],
            precio: "800",
            color:[
                "rosa",
                "blanco",
                "negro",
                "amarillo"
            ],
            imagen: "https://i.ibb.co/2SK2ZW5/bikini7.jpg"
          }

    ]
    return(
      

    <FlatList
    data = {dress}
    keyExtractor = {(item) => item.id.toString()}
    renderItem ={({item}) =>{
                    return (
                        <View> 
                            <Card style ={styles.cardImage}>
                                {/* <Card.Title style= {styles.contenedorTitulo}>{item.nombre}</Card.Title> */}
                                    {/* <Card.Divider/>   */}
                                    <View style={styles.contenedorImagen}> 
                                       
                                     <Image source={{uri:`${item.imagen}`, }} 
                                        style ={styles.image}/>
                                        <View style= {styles.contenedorInformacion}>
                                            <Text>{item.nombre}</Text>    
                                            <Text>Precio: {item.precio}</Text> 
                                            <Text>Tallas: {item.talla}</Text>
                                            {/* <Text> color: {item.color}</Text> */}
                                            <View style={styles.contenedorBotones}>
                                                <Text>Colores:</Text>
                                                <Text></Text> 
                                                <Button style={styles.botone} title= "Azul"/>
                                                <Button style={styles.botone} title= "Azul"/>
                                            </View>
                                            <Text>Tallas: {item.talla}</Text>
                                        </View>    
                                        <View style= {styles.botones}>
                                        <TouchableOpacity >
                                                        <MaterialCommunityIcons 
                                                            name="shopping" 
                                                            color= {"#bd787d"} 
                                                            size={35} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess")}}>
                                                        <MaterialCommunityIcons 
                                                            name="cart"  
                                                            color= {"#bd787d"} 
                                                            size={35} />
                                            </TouchableOpacity>
                                        </View>  
                            </View>
                           
                            </Card>
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
    contenedorBotones:{
        flex: 2,
        flexDirection: "row",
        // backgroundColor: "#bd787d",
        width: width * 0.1,
        height: height * 0.01
    },
    botone:{
        backgroundColor: "#bd787d",
        borderRadius:1,
    },

});

export default JoliePinkSpecificCategory;