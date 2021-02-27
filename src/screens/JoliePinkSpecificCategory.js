import React from "react";
import { StyleSheet, View, Text } from "react-native";

const JoliePinkSpecificCategory = () =>{
    return(
        <View style = {styles.container}>
            <Text>
               Esta categoria Especifica
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

export default JoliePinkSpecificCategory;