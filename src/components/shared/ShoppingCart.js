import React  from "react";
import {Dimensions,StyleSheet,Text} from "react-native";

import {Card} from "react-native-elements"

const { width, height } = Dimensions.get("screen");

const ShoppingCart = ({id,nombre,precio,cantidad,talla,color,img}) =>{

    return(

    <Card style={styles.container}>
        <Text>{id}</Text>
       <Text>{nombre}</Text>
       <Text>{precio}</Text>
       <Text>{cantidad}</Text>
       <Text>{talla}</Text>
       <Text>{color}</Text>
       <Text>{img}</Text>
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
    }
  });

  export default ShoppingCart;