import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity,TextInput } from "react-native";
import {
    Card, 
    Button,
    ButtonGroup,
    Input

} from "react-native-elements";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";
import { Context as AuthContext} from "../../providers/AuthContext";
import { Context as PurchaseContext} from "../../providers/PurchaseContext";

// import Button from "../shared/Button";
const {width, height} = Dimensions.get("window");



const JoliePinkPurchasingProcess = ({navigation,route}) =>{

    const {createShoppingCart} = useContext(ShoppingCartContext);
    // const {state:shoppingCartState,updateShoppingCart} =useContext(ShoppingCartContext);
    const { createPurchase} = useContext(PurchaseContext);
    const {state} = useContext(AuthContext);
    const [cantidad, setCantidad] = useState("");
    const {id,nombre,precio,img,talla} = route.params;

    const [color, setColor] = useState("");
    const [talla1,setTalla1] = useState("");
    const [total,setTotal] = useState("");

    const tallas = ["XS","S", "M","L","XL"];

 

    const calcularTotal =(input) =>{
        if(input != ""){
            setTotal(cantidad * precio);
        }  
    }

    const valortalla= (value)=>{
       if(value != ""){
        console.log(value);
       }
    }



    const  handleSaveShopping = () =>{
        createShoppingCart(id,nombre,precio,cantidad,talla,color,img, state.user.id);
    }

    const handleSavePurchase = () =>{
        // createPurchase(id,nombre,precio,cantidad,talla,color,img,total, state.user.id);
        navigation.navigate("Pay", {id:id,
            nombre: nombre, img : img, precio: precio,talla: talla,total: total,color:color, cantidad: cantidad})
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
                        {/* <Input 
                            value ={"negro"}
                            onChangeText = {setColor}
                            disabled = {true}
                            
                        /> */}
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

                {tallas.map((index) =>(
                    <TouchableOpacity   style={styles.botonTalla}> 
                    <TextInput style = {styles.textoBotones}
                     value={index}
                     onChangeText = {setTalla1}
                     editable = {false}
                     onBlur = {()=>{
                        valortalla();
                     }}
                    />
                    </TouchableOpacity >
                ))}

                
            </View>
            <View style={styles.acciones}>
                <Button
                        // mode="contained"
                        style={styles.boton}
                        onPress={handleSaveShopping}
                        title =  "Agregar al Carrito"
                        //   onPress = {calcularTotal}
                        />
               <Text>    </Text>
                <Button
                    //   mode="contained"
                      style={styles.boton}
                      onPress={handleSavePurchase}
                      title =  "Comprar Articulo"
                    />
            {/* </Button> */}
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
        marginLeft:10,
        // borderRadius: 20,
        width: width * 0.50,
        height: height * 0.4
      },
      botonTexto:{
          color: "#f2ebe8",
          fontSize: 50,
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
    textoBotones:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        borderColor:"#bd787d",
        // marginTop:25,
        marginLeft:5,
        marginRight:5,
        alignItems:"center",
        height: height * 0.06,
        // width: width * 0.15
        
        // padding:12,
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
        width: width* 0.50,
        height: height * 0.10,
        marginTop:3
    },
    contendorBotones:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 10,
        height: height * 0.08,
        // backgroundColor: "white",
        // marginBottom: 10,
    },
    acciones:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 10,
        height: height * 0.08,
        // backgroundColor: "white",
        marginBottom: 20,

    },
    botonTalla:{
        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: '#bd787d',
        justifyContent:"center",
        alignItems:"center",
        margin:5
    }
});

export default JoliePinkPurchasingProcess;