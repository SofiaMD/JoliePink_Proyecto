import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import {
    Card, 
    Button,
    ButtonGroup,
    Input

} from "react-native-elements";

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";
import { Context as AuthContext} from "../../providers/AuthContext";

// import Button from "../shared/Button";
const {width, height} = Dimensions.get("window");



const JoliePinkPurchasingProcess = ({navigation,route}) =>{

    const {createShoppingCart} = useContext(ShoppingCartContext);
    // const {state:shoppingCartState,updateShoppingCart} =useContext(ShoppingCartContext);
    const {state} = useContext(AuthContext);
    const [cantidad, setCantidad] = useState("");
    const {id,nombre,precio,img} = route.params;

    const [color, setColor] = useState("");
    const [talla,setTalla] = useState("");

    const tallas = ["xs","s", "m","l","xl"];

    



    const  handleSaveShopping = () =>{
        createShoppingCart(id,nombre,precio,cantidad,talla,color,img, state.user.id);
    }

    return (
        <View style= {styles.container}>
            <Text>{id}</Text>
            <Text>{nombre}</Text>
            <Text>{precio}</Text>
            <Image style = {styles.imagen} source={{uri:`${img}`, }}/>
            <Text>{img}</Text>
            <Input 
                value= {cantidad}
                onChangeText={setCantidad}
            />
            <Input 
                value= {talla}
                onChangeText={setTalla}
            />
            <Input 
                value= {color}
                onChangeText={setColor}
            />


            <ButtonGroup
                selectedBackgroundColor="pink"
                buttons={tallas}
                containerStyle={{height: 40}}
                buttonContainerStyle={{backgroundColor: 'cadetblue'}}
                textStyle={{color: '#fff'}}
            />
            
            <Button
                      // mode="contained"
                      style={styles.boton}
                      onPress={handleSaveShopping}
                      title =  "Agregar al Carrito"
                    >
            </Button>
             
            <Button
                      // mode="contained"
                      style={styles.boton}
                      onPress={handleSaveShopping}
                      title =  "Comprar"
                    >
            </Button>
        </View>
    )
}

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
});

export default JoliePinkPurchasingProcess;