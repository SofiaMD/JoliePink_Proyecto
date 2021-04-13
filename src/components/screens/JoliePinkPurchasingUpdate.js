import React,{useState,useContext,useEffect} from "react";
import {StyleSheet,View,Text,Image,Dimensions,TouchableOpacity} from "react-native";



import {  

    Card,
    Input,
    Button
    
} from "react-native-elements";


import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";
import { Context as AuthContext} from "../../providers/AuthContext";
// import { Image } from "react-native";

// import Button from "../shared/Button";
const {width, height} = Dimensions.get("window");


const JoliePinkPurchasingUpdate = ({navigation}) =>{

    const {state:shoppingCartState,updateCart} =useContext(ShoppingCartContext);
    const {state} = useContext(AuthContext);

    const [cantidad,setCantidad] =useState("");
    const [color, setColor] = useState("");
    const [talla,setTalla] = useState("");
    const [precio,setPrecio] = useState("");
    const [total,setTotal] = useState("");

    const tallas = ["xs","s", "m","l","xl"];

    // talla = "xs"
    // color= "negro"

    useEffect(() => {
        if (shoppingCartState.currentCart.id) {
          setPrecio(shoppingCartState.currentCart.precio);
            setCantidad(shoppingCartState.currentCart.cantidad);
        console.log("Hola")
        }
      }, [shoppingCartState.currentCart]);


      const calcularTotal =(input) =>{
        if(input != ""){
            setTotal(cantidad * precio);
        }  
    }

    const handleSaveShopping = () =>{
        updateCart(
            shoppingCartState.currentCart.id,
            talla,
            color,
            cantidad

        );
    }

      return(
       
        <View style= {styles.container}>
                <View style={styles.contenedorImagen}>
                        <Image style = {styles.imagen} source={{uri:`${shoppingCartState.currentCart.img}`, }}/>
                </View>
                <View style={styles.contenedorDetalles}>
                <View style={styles.descripcion}>
                    <Text style={styles.texto}>Precio: L.</Text>
                    <Text style={styles.texto}>{shoppingCartState.currentCart.precio}        </Text>

                        <TouchableOpacity
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
                    <Button style={styles.texto}
                        title = {index}
                        style = {styles.botonTalla}
                        value = {index}
                        // onPress = {valortalla}
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
                      onPress={()=> {navigation.navigate("Pay")}}
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
      backgroundColor: '#DED1DB'
  }

});


export default JoliePinkPurchasingUpdate;

