import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Dimensions,Image,TouchableOpacity} from "react-native";
import { Header, } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ButtonCategory from "../../components/shared/ButtonCategory";

const {width, height} = Dimensions.get("window");


const JoliePinkCategory = ({navigation}) =>{
    return(
        <SafeAreaProvider>
        <Header 
            centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
            containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
        />
        <View style = {styles.container}>
            <View style = {styles.contenedores}>
                <TouchableOpacity>
                    <ButtonCategory title = "Blusas" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                        <Image style = {styles.imagen} source={{uri:'https://i.ibb.co/NnSn1V3/Blusas1.jpg', }}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ButtonCategory title = "Vestidos" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                    <Image style = {styles.imagen} source={{uri:'https://i.ibb.co/fvB95hC/vestidos.jpg', }}/>
                </TouchableOpacity>
               
            </View>
            <View style = {styles.contenedores}>
                <TouchableOpacity>
                    <ButtonCategory title = "Pantalones" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                    <Image style = {styles.imagen} source={{uri:'https://i.ibb.co/rbS6Jzx/Pantalon1.jpg', }}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ButtonCategory title = "Chaquetas" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                    <Image style = {styles.imagen} source={{uri:'https://i.ibb.co/vmvTGsp/Chaquetas1.jpg', }}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.contenedores}>
                <TouchableOpacity>
                    <ButtonCategory title = "Accesorios" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                    <Image style = {styles.imagen} source={{uri:'https://i.ibb.co/F8p3SSp/Sombrero.jpg', }}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ButtonCategory title = "Trajes de Baño" callback ={() => {navigation.navigate("SpecificCategory")}}/>
                    <Image style = {styles.imagen} source={{uri:'https://i.ibb.co/0VMWxZ0/bikini1.jpg', }}/>
                </TouchableOpacity>
               
                
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
        justifyContent: "center"
        // backgroundColor: "#000"
    },
    imagen:{
        flexDirection: "column",
        marginTop: 1,
        marginLeft: 8,
        marginRight: 8,
        width: width* 0.40,
        height: height * 0.15
    },


});

export default JoliePinkCategory;