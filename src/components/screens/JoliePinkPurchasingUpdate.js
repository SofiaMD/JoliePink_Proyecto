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


const JoliePinkPurchasingUpdate = () =>{

    const {state:shoppingCartState,updateShoppingCart} =useContext(ShoppingCartContext);
    const {state} = useContext(AuthContext);

    const [cantidad,setCantidad] =useState("");
    const [color, setColor] = useState("");
    const [talla,setTalla] = useState("");
    const [precio,setPrecio] = useState("");

    useEffect(() => {
        if (shoppingCartState.currentCart.id) {
          setPrecio(shoppingCartState.currentCart.precio);
            setCantidad(shoppingCartState.currentCart.cantidad);
        console.log("Hola")
        }
      }, [shoppingCartState.currentCart]);

      return(
       
            <View style={styles.container}>
              <View style={styles.contenedorDetalles}> 
                <Text style={styles.texto}>{shoppingCartState.currentCart.nombre}</Text>
                <Text style={styles.texto}>{shoppingCartState.currentCart.precio}</Text>
                <Text style={styles.texto}>{shoppingCartState.currentCart.talla}</Text>
                <Text style={styles.texto}>{shoppingCartState.currentCart.color}</Text>
            {/* <Text>{shoppingCartState.currentCart.img}</Text> */}
            <Image style = {styles.imagen} source={{uri:`${shoppingCartState.currentCart.img}`, }}/>
            <Input
                value={cantidad}
                onChangeText={setCantidad}
            />

                <Button
                      // mode="contained"
                      style={styles.boton}
                    //   onPress={handleSaveShopping}
                      title =  "Agregar al Carrito"
                    >
            </Button>
             
            <Button
                      // mode="contained"
                      style={styles.boton}
                    //   onPress={handleSaveShopping}
                      title =  "Comprar"
                    >
            </Button>
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
    },
    boton :{
        backgroundColor: "#bd787d",
        alignSelf: "center",
        padding: 10,
        marginTop: 10,
        // borderRadius: 20,
        width: width * 0.50,
        // heigth: heigth * 1
      },
      botonTexto:{
          color: "#f2ebe8",
          fontSize: 20,
          // fontWeight: "bold",
          textAlign: "center"
      },
      imagen:{
        flexDirection: "column",
        marginTop: 1,
        marginLeft: 8,
        marginRight: 8,
        width: width* 0.40,
        height: height * 0.15
      },
      texto:{
        fontSize: 10,
        fontWeight: "bold",
        color: "black"
      },
      contenedorDetalles: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#DED1DB"
    }

});


export default JoliePinkPurchasingUpdate;

