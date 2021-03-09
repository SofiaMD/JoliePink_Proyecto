import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Alert = ({ type,title }) => {
    let background = "";
    let Icon = "";

    if (type === "error"){
        Icon = "tomes-circle";
    } else if (type === "warning"){
        Icon = "warnig";
    } else if (type === "info"){
        Icon = "info-circle";
    } else if (type === "success"){
        Icon = "check-circle";
    }

    return(
        <View style={[styles.container]}>
            <Icon name={icon} style={styles.icon}/>
            <Text>{title}</Text>
        </View>
    );
};

const  styles = StyleSheet.create({
   container: {
       margin: 10,
       padding: 10,
       flexDirection: "row",
   } ,

   icon:{
       marginRight: 10,
   },

});

export default Alert;