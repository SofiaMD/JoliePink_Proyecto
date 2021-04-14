import React, {useContext} from "react";
import {StyleSheet,Dimensions,Text,Image,View,TouchableOpacity} from "react-native";

import {Card} from "react-native-elements";

const {width,height} = Dimensions.get("screen");

const Purchase = ({id,nombre,precio,cantidad,talla,color,img,total}) =>{

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
                <Text>Color:{color}</Text> 
                <Text>Cantidad:{cantidad}</Text>
                <Text>Total:{total}</Text>                  
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
  });

export default Purchase;
