import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity,TextInput } from "react-native";
import {
    Card, 
    Button,
    ButtonGroup,
    Input

} from "react-native-elements";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from "react-native-toast-message";

import InputTotal from "../shared/InputTotal";

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";
import { Context as AuthContext} from "../../providers/AuthContext";
import { Context as PurchaseContext} from "../../providers/PurchaseContext";

// import Button from "../shared/Button";
const {width, height} = Dimensions.get("window");



const JoliePinkPurchasingProcess = ({navigation,route}) =>{

    const {createShoppingCart} = useContext(ShoppingCartContext);
    // const {state:shoppingCartState,updateShoppingCart} =useContext(ShoppingCartContext);
    const {createPurchase} = useContext(PurchaseContext);
    const {state} = useContext(AuthContext);

    const [cantidad, setCantidad] = useState("");
    const {id,nombre,precio,img,categoriaPrenda} = route.params;

    const [color, setColor] = useState("");
    const [talla,setTalla] = useState("");
    const [total,setTotal] = useState("");

    const [tamaño, setTamaño] = useState("")

    const tallas = ["XS","S", "M","L","XL"];

    // const tallas = [
    //     {
    //         "id":232,
    //         "tipo":"XS"
    //     },
    //     {
    //         "id":67,
    //         "tipo":"S"
    //     },
    //     {
    //         "id":22,
    //         "tipo":"M"
    //     },
    //     {
    //         "id":28,
    //         "tipo":"L"
    //     },
    //     {
    //         "id":218,
    //         "tipo":"XL"
    //     },


    // ];

    let negro = "black"
        let rosa = "pink";
        let blanco = "white"

    const obtenerColor1 = ()=> {setColor(rosa);};
    const obtenerColor2 = ()=>{setColor(blanco)};
    const obtenerColor3 = () =>{setColor(negro)};


    const calcularTotal =(input) =>{
        if(input != ""){
            setTotal(cantidad * precio);
            // console.log(total);
        }  
    }

    useEffect(()=>{
    
      calcularTotal(cantidad);
      console.log(total);

    },[cantidad])

    const valorTalla = (index) =>{
        
        setTalla(index);
        console.log(talla)
    
    }

    const valorTamaño = (index) =>{
        
        setTalla(index);
        console.log(talla)
    
    }

    const tamaños = ["Pequeño", "Mediano", "Grande"] 

    function MostrarTamaños (props){
        const categoriaEspecifica = props.categoriaPrenda;

        if(categoriaEspecifica === "accesorios"){
            
            return (
            
                tamaños.map((index) =>(
                    <TouchableOpacity   
                      onPress= {() => valorTamaño(index)}
                      style={styles.botonTamaño}> 
                      <Text style= {styles.textoBotones}>{index}</Text>
                    </TouchableOpacity >
                  ))
            )
        }

        else{
            // for(let i= 0; i < 6; i++){

            //     return (
            //             <TouchableOpacity   
            //               onPress= {() =>valorTalla(tallas[i].tipo)}
            //               style={styles.botonTalla}> 
            //               <Text style= {styles.textoBotones}>{tallas[i].tipo}</Text>
            //             </TouchableOpacity >
            //     )
            // }
            return (
                tallas.map((index) =>(
                    <TouchableOpacity   
                      onPress= {() =>valorTalla(index)}
                      style={styles.botonTalla}> 
                      <Text style= {styles.textoBotones}>{index}</Text>
                    </TouchableOpacity >
                  ))
            )
           
        }
    }




    const  handleSaveShopping = () =>{
        createShoppingCart(id,nombre,precio,cantidad,talla,color,img,total, state.user.id);
        Toast.show({
            text1 : "Articulo Agregado Correctamente" ,
            position: 'top',
            // visibilityTime: 3000,
          });  
    }

    const handleSavePurchase = () =>{
        navigation.navigate("Pay", {id:id,
            nombre: nombre, img : img, precio: precio,talla: talla,total: total,color:color, cantidad: cantidad})
    }


    return (
        <View style= {styles.container}>
                <View style={styles.contenedorImagen}>
                        <Image style = {styles.imagen} source={{uri:`${img}`, }}/>
                </View>
                <Toast  ref={(ref) => Toast.setRef(ref)} />

                <View style={styles.contenedorDetalles}>
                <View style={styles.descripcion}>
                    <Text style={styles.texto}>Precio: L.</Text>
                    <Text style={styles.texto}>{precio}      </Text>

                        <TouchableOpacity
                            onPress= {obtenerColor1}
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
                            onPress= {obtenerColor2}
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
                        onPress= {obtenerColor3}
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
                    // type = "number"
                    value= {cantidad}
                    onChangeText={setCantidad}
                    style={styles.inputs}
                    placeholder= "Cantidad"
                    onBlur ={() =>{
                        setCantidad(cantidad)
                    }}
                />
                <InputTotal  total = {total}/>

            </View>
            <View style={styles.contendorBotones}>

                <MostrarTamaños categoriaPrenda ={categoriaPrenda}/>

                
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
    },
    botonTamaño:{
        width: width * 0.25,
        height: height * 0.06,
        backgroundColor: '#bd787d',
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        margin:5
    },
});

export default JoliePinkPurchasingProcess;