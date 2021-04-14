import React, {userState} from "react";
import {StyleSheet, Text} from "react-native";
import {Input} from "react-native-elements";


const InputTotal = ({total}) =>{

    return(
        
       <Text style= {styles.texto}>Total: {total}</Text>
    )
   
}


const styles = StyleSheet.create({

    texto:{
        fontSize:25,
        fontWeight:"bold"
    }
})


export default InputTotal;