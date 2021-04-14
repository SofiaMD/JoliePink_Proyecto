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
            <View style={styles.contenedorNombre}>
                <Text style={styles.nombreTexto}>{nombre}</Text> 
            </View>
            <Text></Text>  
            <Text style={styles.texto}>Precio: L.{precio}.00</Text>
            <Text style={styles.texto}>Talla: {talla}</Text> 
            <Text style={styles.texto}>Color: {color}</Text> 
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
                                
                            }}   
                        > 
                        </TouchableOpacity>
                
                </View>
            <Text style={styles.texto}>Total: {total}</Text>
            <Text></Text>                   
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
  contenedorNombre:{
    // marginTop: 10,
    width: width * 0.40,

  },
  nombreTexto:{
    fontSize: 16
  },
  texto:{
    fontSize: 15
  },
  texto1:{
    fontSize: 20
  },
  colorCampo:{
    flexDirection:"row"
  }

  });

export default Purchase;
