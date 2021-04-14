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
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Si", onPress: () => handleDeleteArticle(id) }
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
          <Text></Text> 
            <View style={styles.contenedorNombre}>
                <Text style={styles.nombreTexto}>{nombre}</Text> 
            </View>
            <Text></Text>
            <Text style={styles.texto}>Precio: L.{precio}.00</Text> 
            <Text style={styles.texto}>Talla: {talla}</Text> 
            <Text style={styles.texto}>Cantidad: {cantidad}</Text> 
            <View style={styles.colorCampo}>
            <Text style={styles.texto}>Color:   </Text>
            <TouchableOpacity 
                            style={{
                                borderWidth:1,
                                borderColor:color,
                                alignItems:'center',
                                justifyContent:'center',
                                width:25,
                                height:25,
                                backgroundColor:color,
                                borderRadius:50,
                                // marginTop:15
                                
                            }}   
                        > 
                        </TouchableOpacity>
                
                </View>
                <Text style={styles.texto}>Total: L.{total}.00</Text>
              <View style = {styles.contenedorEliminar}>
                <TouchableOpacity onPress ={VerifyDeleteShopping} style = {styles.botonEliminar}>
                    <MaterialCommunityIcons name="delete-empty"  color={"#bd787d"} size={40}  /> 
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
      flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
      // width: width * 0.45,
      // height: height * 0.2,
      // margin: 5,
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
  botonEliminar:{
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  contenedorEliminar:{

    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: width * 0.4,
    marginTop:25,
    // backgroundColor:"red"
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
  },
  contenedorNombre:{
    // marginTop: 10,
    width: width * 0.40,
  
  },
  nombreTexto:{
    fontSize: 16
  },
  colorCampo:{
    flexDirection:"row"
  }

  });

  export default ShoppingCart;