import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const {width, height} = Dimensions.get("window");

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);


const CarouselNewCollection = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <View style = {styles.contenedorImagen}>
          <Image
            source={{ uri: item.imgUrl }}
            style={styles.image}
          />
      </View>
        <Text style={styles.descripcion}>
            {item.descripcion}
            
        </Text>
      </View>
    )
  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ddd2ce',
      
      borderRadius: 8,
      width: ITEM_WIDTH,
      paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    contenedorImagen:{
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",

    },
    image: {
      width: width * 0.6,
      height: 400,
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20,

    },
    descripcion:{
        fontSize: 18,
        alignContent: "center",
        justifyContent: "center",
        textAlign:"justify",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15
        
    }
  })
  
  export default CarouselNewCollection;