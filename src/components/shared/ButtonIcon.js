import React from "react";
import { StyleSheet, Text, Dimensions, TouchableOpacity, Touchable} from "react-native";
import {Button, Icon} from "react-native-elements";

const {width,heigth} = Dimensions.get("screen");

const ButtonIcon = ({name, callback}) => {
    return (
    /*    <Button style = {styles.boton}
        icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
            />
          }
         />*/
         <TouchableOpacity onPress={callback} style = {styles.boton}>
             <Icon 
              name={name}
              size={30}
              color="black"
            />
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton :{
        backgroundColor: '#bd787d',
        padding: 10,
        borderRadius: 50
    },
    botonTexto:{
        color: "#f2ebe8",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default ButtonIcon;