import React, {useContext} from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Dimensions
    
} from "react-native";


import {
    Card

}from "react-native-elements";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";

const {width, height} = Dimensions.get("window");

import ShoppingCart from "../shared/ShoppingCart";


const ShoppingCartList =({navigation, shoppingsCart}) =>{


    const {state, setCurrentCart,deleteCart} = useContext(ShoppingCartContext);

    const handleSelectArticle = (shoppingCart) => {
        setCurrentCart(shoppingCart);
        navigation.navigate("PurchansingUpdate");
    };


    const handleSelectArticleDelete = (shoppingCart) =>{

        deleteCart(shoppingCart.id)
    }

    const emptyFlatList = (
        <View style={styles.emptyShoppingCart}>
          <Text style = {styles.textoMensaje}> No has agregado artículos al carrito...</Text>
        </View>
      );


    return (
        <View style={styles.container}>
           <FlatList
            data = {shoppingsCart}
            ListEmptyComponent = {emptyFlatList}
            keyExtractor = {(item) => item.id.toString()}
            renderItem ={({item}) =>(
                <>
                     <TouchableOpacity
                        onPress={() => {
                            handleSelectArticle(item);
                        }}>
                        <ShoppingCart
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            cantidad={item.cantidad}
                            talla={item.talla}
                            color={item.color}
                            img={item.img}
                            total= {item.total}
                            navigation={navigation}
                        /> 
                    </TouchableOpacity>                
                    </>   
                            
                )}  
            />

             
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   flexDirection: "column",
    },
    emptyShoppingCart: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems:"center",
        width: width * 1,
        height:height * 0.8,
        // backgroundColor: "red"
      },

    textoMensaje: {
        fontSize:20,
        fontWeight: "bold"
    }

});

export default ShoppingCartList;