import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkCategory = () =>{
    return(
        <View style = {styles.container}>
            <Text>
                Estas Categoria Son
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    }

});

export default JoliePinkCategory;