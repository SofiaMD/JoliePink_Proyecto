import React,{useState,useContext,useEffect} from "react";
import {StyleSheet,View,Text,Image,Dimensions,TouchableOpacity, TouchableHighlight,TextInput} from "react-native";


import Toast from "react-native-toast-message";
import {  

    Card,
    Input,
    Button
    
} from "react-native-elements";

import InputTotal from "../shared/InputTotal";
import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";
import { Context as PurchaseContext} from "../../providers/PurchaseContext";
import { Context as AuthContext} from "../../providers/AuthContext";
// import { Image } from "react-native";

// import Button from "../shared/Button";
const {width, height} = Dimensions.get("window");


const JoliePinkPurchasingUpdate = ({navigation}) =>{

    const {state:shoppingCartState,updateCart} =useContext(ShoppingCartContext);
    const { createPurchase} = useContext(PurchaseContext);
    const {state} = useContext(AuthContext);

    const [cantidad,setCantidad] =useState("");
    const [color, setColor] = useState("");
    const [talla,setTalla] = useState("");
    const [precio,setPrecio] = useState("");
    const [total,setTotal] = useState("");

    const tallas = ["XS","S", "M","L","XL"];
        let negro = "black"
        let rosa = "#bd787d";
        let blanco = "white"

    const obtenerColor1 = ()=> {setColor(rosa);};
    const obtenerColor2 = ()=>{setColor(blanco)};
    const obtenerColor3 = () =>{setColor(negro)};

    const valorTalla = (index) =>{
        
        setTalla(index);
        console.log(talla)
    
    }

    const valorTamaño = (index) =>{
        
        setTalla(index);
        console.log(talla)
    
    }

    const tamaños = ["Pequeño", "Mediano", "Grande"] ;

    function MostrarTamaños (props){
        const categoriaTamaño = props.categoriaPrenda;

        if(categoriaTamaño=== "Pequeño" || 
        categoriaTamaño === "Grande"  || 
        categoriaTamaño === "Mediano"  ){

            return (
                tamaños.map((index) =>(
                    <TouchableOpacity   
                      onPress= {() => valorTamaño(index)}
                      style={styles.botonTamaño}> 
                      <Text style= {styles.textoBotones}>{index}</Text>
                    </TouchableOpacity >
                  ))
            )
        }else{
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

    useEffect(()=>{
    
        calcularTotal(cantidad);
        console.log(total);
  
      },[cantidad])

    useEffect(() => {
        if (shoppingCartState.currentCart.id) {
          setPrecio(shoppingCartState.currentCart.precio);
            setCantidad(shoppingCartState.currentCart.cantidad);
        }
      }, [shoppingCartState.currentCart]);


      const calcularTotal =(cantidad) =>{
        if(cantidad != ""){
            setTotal(cantidad * precio);
        }  
    }

    const handleSaveShopping = () =>{
        updateCart(
            shoppingCartState.currentCart.id,
            talla,
            color,
            cantidad,
            total

        );

        Toast.show({
            text1 : "Articulo Agregado Correctamente" ,
            position: 'top',
            onPress: () => {navigation.navigate("Home")} 
          }); 
    }
    const guardar = () =>{
        createPurchase(shoppingCartState.currentCart.id,shoppingCartState.currentCart.nombre,precio,cantidad,talla,color,shoppingCartState.currentCart.img,total, state.user.id);
    }

    const handleSavePurchase = () =>{
        navigation.navigate("Pay", {id:shoppingCartState.currentCart.id,
            nombre: shoppingCartState.currentCart.nombre, img : shoppingCartState.currentCart.img, precio: precio,talla: talla,total: total,color:color, cantidad: cantidad})
    }

      return(
       
        <View style= {styles.container}>
                <View style={styles.contenedorImagen}>
                        <Image style = {styles.imagen} source={{uri:`${shoppingCartState.currentCart.img}`, }}/>
                </View>
                <Toast  ref={(ref) => Toast.setRef(ref)} />
                <View style={styles.contenedorDetalles}>
                <View style={styles.descripcion}>
                    <Text style={styles.texto}>Precio: L.</Text>
                    <Text style={styles.texto}>{shoppingCartState.currentCart.precio}        </Text>
                        <TouchableOpacity
                            onPress = {obtenerColor1}
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
                            onPress = {obtenerColor2}
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
                            onPress = {obtenerColor3}
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
                <View style={{marginTop:-15,marginLeft:5}}>
                    <InputTotal  total = {total}/>
                </View>
                
               
            </View>
            <View style={styles.contendorBotones}>

                <MostrarTamaños categoriaPrenda ={shoppingCartState.currentCart.talla}/>


                </View>
            <View style={styles.contendorBotones}>
            <Button
                      style={styles.boton}
                      onPress={handleSaveShopping}
                      title =  "Agregar al Carrito"
                    >
            </Button>
            <Text>      </Text>
            <Button
                      // mode="contained"
                      style={styles.boton}
                      onPress={handleSavePurchase}
                      title =  "Comprar Articulo"
                    >
            </Button>
            </View>
   </View>
</View>
        
      )
};


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
      height: height * 0.08
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
  textoBotones:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    borderColor:"#bd787d",
    // marginTop:25,
    marginLeft:5,
    marginRight:5,
    alignItems:"center",
    // height: height * 0.06,
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
    marginTop: 10,
    height: height * 0.08,

  },
    botonTalla:{
        width: width * 0.15,
        height: height * 0.06,
        backgroundColor: '#bd787d',
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }

});


export default JoliePinkPurchasingUpdate;

