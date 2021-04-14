import React,{useContext}  from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View, 
  Alert,
TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Card} from "react-native-elements";

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";

const { width, height } = Dimensions.get("screen");



const ShoppingCart = ({id,nombre,precio,cantidad,talla,color,img,total,navigation}) =>{

  const {state, setCurrentCart, deleteCart} = useContext(ShoppingCartContext);

    const VerifyDeleteShopping = ()=>{
      Alert.alert(
        "Eliminar Articulo",
        "¿Estas seguro que deseas eliminar este articulo?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => handleDeleteArticle(id) }
        ]
      );
    }

    const handleDeleteArticle = (id)=>{
        console.log(id)
        deleteCart(id);
        navigation.navigate("ShoppingCart");
        alert("Articulo eliminado exitosamente");
        
    }
    return(

    <Card style={styles.container}>
      
      <View style={styles.contenedorImagen}> 
        <Image source={{uri:`${img}`, }} style ={styles.image}/>
          <View style= {styles.contenedorInformacion}>
            <Text>Nombre:{nombre}</Text> 
            {/* <Text>{"\n"}</Text>   */}
            <Text>Precio:{precio}</Text> 
            {/* <Text>{"\n"}</Text>   */}
            <Text>Talla:{talla}</Text> 
            <Text>Total:{total}</Text> 
            <Text>Color: </Text> 
            <TouchableOpacity 
                            style={{
                                margin:1,
                                borderWidth:1,
                                borderColor:color,
                                alignItems:'center',
                                justifyContent:'center',
                                width:20,
                                height:20,
                                backgroundColor:color,
                                borderRadius:50,
                            }}   
                        >
                         
                        </TouchableOpacity>
            <Text>Cantidad:{cantidad}</Text>  
              <View style = {styles.contenedorEliminar}>
                <TouchableOpacity onPress ={VerifyDeleteShopping} style = {styles.botonEliminar}>
                    <MaterialCommunityIcons name="delete-empty"  color={"white"} size={30}  /> 
                </TouchableOpacity>
              </View>
              
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
      height: height * 0.20
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

  botonEliminar:{
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  contenedorEliminar:{

    justifyContent: "flex-end",
    alignItems: "flex-end",
    
    width: width * 0.4
  }

  });

  export default ShoppingCart;