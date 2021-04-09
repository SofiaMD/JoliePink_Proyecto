import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import {
    Card, 
    Button,
    ButtonGroup,
    Input

} from "react-native-elements";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";
import { Context as AuthContext} from "../../providers/AuthContext";

// import Button from "../shared/Button";
const {width, height} = Dimensions.get("window");



const JoliePinkPurchasingProcess = ({navigation,route}) =>{

    const {createShoppingCart} = useContext(ShoppingCartContext);
    // const {state:shoppingCartState,updateShoppingCart} =useContext(ShoppingCartContext);
    const {state} = useContext(AuthContext);
    const [cantidad, setCantidad] = useState("");
    const {id,nombre,precio,img,talla} = route.params;

    const [color, setColor] = useState("");
    // const [talla,setTalla] = useState("");
    const [total,setTotal] = useState("");
    const [talla1,setTalla1] = useState("");

    const tallas = ["xs","s", "m","l","xl"];

    const calcularTotal =(input) =>{
        if(input != ""){
            setTotal(cantidad * precio);
        }  
    }

    const valortalla= (value)=>{
       if(value != ""){
        setTalla1(value);
       }
    }



    const  handleSaveShopping = () =>{
        createShoppingCart(id,nombre,precio,cantidad,talla,color,img, state.user.id);
    }

    return (
        <View style= {styles.container}>
                <View style={styles.contenedorImagen}>
                        <Image style = {styles.imagen} source={{uri:`${img}`, }}/>
                </View>
                <View style={styles.contenedorDetalles}>
                <View style={styles.descripcion}>
                    <Text style={styles.texto}>Precio: L.</Text>
                    <Text style={styles.texto}>{precio}      </Text>

                        <TouchableOpacity
                            value = {"rosa"}
                            style={{
                            margin:1,
                            borderWidth:1,
                            borderColor:'#bd787d',
                            alignItems:'center',
                            justifyContent:'center',
                            width:40,
                            height:40,
                            backgroundColor:'#bd787d',
                            borderRadius:50,
                            }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                        value = {"blanco"}
                            style={{
                                margin:1,
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:40,
                                height:40,
                                backgroundColor:'#fff',
                                borderRadius:50,
                             }}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity 
                            value = {"negro"}
                            style={{
                                margin:1,
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:40,
                                height:40,
                                backgroundColor:'#000000',
                                borderRadius:50,
                            }}
                        >
                        </TouchableOpacity>
                
            </View>
            <View style={styles.contenedorInputs}>
                <Input 
                    value= {cantidad}
                    onChangeText={setCantidad}
                    style={styles.inputs}
                    placeholder= "Cantidad"
                    onBlur ={() =>{
                        calcularTotal(cantidad)
                    }}
                />
                 <Input 
                    value= {total}
                    onChangeText={setTotal}
                    style={styles.inputs}
                    placeholder= "Total"
                    disabled={true}
                />
            </View>
            <View style={styles.contendorBotones}>

                {talla.map((index) =>(
                    <Button style={styles.texto}
                        title = {index}
                        style = {styles.botonTalla}
                        value = {"index"}
                        // onPress = {valortalla}
                        onBlur  ={() =>{
                            valortalla(index)
                        }}
                    > 
                    </Button>
                ))}
                
            </View>
            <View style={styles.contendorBotones}>
            <Button
                      // mode="contained"
                      style={styles.boton}
                      onPress={handleSaveShopping}
                      title =  "Agregar al Carrito"
                    //   onPress = {calcularTotal}
                    >
            </Button>
             
            <Button
                      // mode="contained"
                      style={styles.boton}
                      onPress={handleSaveShopping}
                      title =  "Comprar Articulo"
                    >
            </Button>
            </View>
           </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#DED1DB"
    },
    boton :{
        backgroundColor: "#bd787d",
        alignSelf: "center",
        padding: 5,
        marginTop: 10,
        marginRight:5,
        marginLeft:5,
        // borderRadius: 20,
        width: width * 0.50,
        heigth: height * 0.50
      },
      botonTexto:{
          color: "#f2ebe8",
          fontSize: 20,
          // fontWeight: "bold",
          textAlign: "center"
      },
      imagen:{
        flexDirection: "column",
        justifyContent: "center",
        width: width* 0.80,
        height: height * 0.50
        },
    texto:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#833c3c",
    },
    contenedorDetalles: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#DED1DB",
        marginTop:10,
        height: height * 0.05
       
    },
    contenedorImagen:{
        marginTop:3,
        justifyContent: "center",
        alignContent: "center",
        alignItems:"center",
        height: height * 0.50
        
    },
    descripcion:{
        flexDirection:"row",
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        height: height * 0.05
    },
    
    contenedorInputs:{
        flexDirection:"row",
        alignItems:"center",
        // justifyContent: "center",
        // alignContent: "center",
        // marginLeft:2,
        // marginRight:,

        width: width* 0.50,
        height: height * 0.10
    },
    contendorBotones:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
        height: height * 0.08

    },
    botonTalla:{
        width: width * 0.16,
        marginRight:2,
        backgroundColor: '#833c3c'
    }
});

export default JoliePinkPurchasingProcess;