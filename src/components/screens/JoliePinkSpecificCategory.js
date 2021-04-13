import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Card, 

} from "react-native-elements";

// import fetchJoliePinkCategories from "../../api/index";


const {width, height} = Dimensions.get("window");

import CardList from "../shared/CardList";

import FlatListAccessories from "../shared/categorias/FlatListAccessories";
import FlatListDress from "../shared/categorias/FlatListDress";
import FlatListPants from "../shared/categorias/FlatListPants";
import FlatListJackets from "../shared/categorias/FlatListJackets";
import FlatListBikinis from "../shared/categorias/FlatListBikinis";
import FlatListBlouses from "../shared/categorias/FlatListBlouses";

const JoliePinkSpecificCategory = ({navigation,route}) =>{

    const [categories, setCategories] = useState([]);
    const [ error, setError ] = useState(false);
    const {categoria} = route.params;
      function Categorias (props){
            const categoria = props.categoria;
          if(categoria === "dress"){
            return <FlatListDress navigation= {navigation}/>
          }
          else if (categoria === "accesorios"){
            return <FlatListAccessories navigation= {navigation}/>
          }
          else if (categoria === "blusas"){
            return <FlatListBlouses navigation= {navigation}/>
          }
          else if (categoria === "pantalones"){
            return <FlatListPants navigation= {navigation}/>
          }
          else if (categoria === "chaquetas"){
            return <FlatListJackets navigation= {navigation}/>
          }
          else if (categoria === "bikinis"){
            return <FlatListBikinis navigation= {navigation}/>
          }
      }
    return(

      <View style= {styles.container}>
          
         <Categorias categoria = {categoria} />
       
      </View>
 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#DED1DB"
    },
    image: {
        width: width * 0.40,
        height: height * 0.20
    },
    informacion:{
        fontWeight: "bold",
        marginTop: 5, 
        marginLeft: 5, 
        marginRight:5
    },
    contenedorImagen: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#DED1DB",
        // backgroundColor: "#bd787d",
       
    },
    contenedorBotones:{
        marginTop: 90,
        flexDirection: "row",
        marginLeft: 2
    },
    contenedorInformacion:{
        marginTop: 10,
        flexDirection: "column",
        marginLeft: 10
    },
    botonCompra:{
        marginTop: 10
    },
    contenedorBoton:{
        flexDirection: "row",
       
    },
    
});

export default JoliePinkSpecificCategory;