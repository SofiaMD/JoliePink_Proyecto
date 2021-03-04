import React from "react";
import { StyleSheet, View, Text } from "react-native";


const JoliePinkCategory = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <Text>
                Estas Categoria Son
            </Text>
            <Text>
                Estas Categoria Son
            </Text>
            {/* <TabBar callback ={() => {navigation.navigate("Home")}}/> */}
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