import React,{useContext}  from "react";
import {Dimensions,StyleSheet,Text,Image,View, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Card} from "react-native-elements";

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";

const { width, height } = Dimensions.get("screen");



const ShoppingCart = ({id,nombre,precio,cantidad,talla,color,img}) =>{

  const {state, setCurrentCart, deleteCart} = useContext(ShoppingCartContext);

    const handleDeleteShopping = ()=>{
      deleteCart(state.id)
    }
    return(

    <Card style={styles.container}>
      
      <View style={styles.contenedorImagen}> 
        <Image source={{uri:`${img}`, }} style ={styles.image}/>
          <View style= {styles.contenedorInformacion}>
            <Text></Text> 
            <Text style={styles.texto1}>{nombre}</Text> 
            <Text></Text>  
            <Text style={styles.texto}>Precio: L.{precio}.00</Text> 
            <Text></Text>  
            <Text style={styles.texto}>Talla: {talla}</Text> 
            <Text></Text>  
            <Text style={styles.texto}>Color: {color}</Text> 
            <Text></Text>  
            <Text style={styles.texto}>Cantidad: {cantidad}</Text> 
            <Text></Text>   
            <TouchableOpacity style={styles.eliminar} onPress ={()=>{handleDeleteShopping}}>
                <MaterialCommunityIcons name="delete-empty"  color={"white"} size={30}  /> 
          </TouchableOpacity>                  
          </View>
         
      </View>
    </Card>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: width * 0.45,
      height: height * 0.2,
      margin: 5,
      // padding: 5,
    },
    content: {
      flex: 1,
    },
    actions: {
      justifyContent: "flex-end",
    },
    image: {
      width: width * 0.40,
      height: height * 0.30
  },
  contenedorInformacion:{
    marginTop: 10,
    flexDirection: "column",
    marginLeft: 10
  },
  contenedorImagen: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#DED1DB",
    // backgroundColor: "#bd787d",
   
  },
  eliminar:{
    marginLeft: 140,
    marginTop: 5
  },
  texto:{
    fontSize: 15
  },
  texto1:{
    fontSize: 20
  }
  });

  export default ShoppingCart;