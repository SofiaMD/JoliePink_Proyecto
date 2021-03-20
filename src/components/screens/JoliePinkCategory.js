import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Dimensions} from "react-native";
import { Header, } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ButtonCategory from "../../components/shared/ButtonCategory";


const JoliePinkCategory = ({navigation}) =>{
    return(
        <SafeAreaProvider>
        <Header 
            centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
            containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
        />
        <View style = {styles.container}>
            <View style = {styles.contenedores}>
                <ButtonCategory title = "Blusas" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                <ButtonCategory title = "Vestidos" callback ={() => {navigation.navigate("SpecificCategory")}}/>
            </View>
            <View style = {styles.contenedores}>
                <ButtonCategory title = "Pantalones" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                <ButtonCategory title = "Chaquetas" callback ={() => {navigation.navigate("SpecificCategory")}}/>
            </View>
            <View style = {styles.contenedores}>
                <ButtonCategory title = "Accesorios" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                <ButtonCategory title = "Trajes de Baño" callback ={() => {navigation.navigate("SpecificCategory")}}/>
            </View>
        </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    },
    contenedores: {
        flex: 3,
        flexDirection: "row",
        // backgroundColor: "#000"
    }

});

export default JoliePinkCategory;