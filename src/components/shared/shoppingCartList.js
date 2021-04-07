import React, {useContext} from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
    
} from "react-native";


import {
    Card

}from "react-native-elements";

import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";

import ShoppingCart from "../shared/ShoppingCart";


const ShoppingCartList =({navigation, shoppingsCart}) =>{


    const {state, setCurrentCart} = useContext(ShoppingCartContext);

    const handleSelectArticle = (shoppingCart) => {
        setCurrentCart(shoppingCart);
        navigation.navigate("PurchansingUpdate");
    };

    const emptyFlatList = (
        <View style={styles.emptyShoppingCart}>
          <Text>No has agregado articulos al carrito...</Text>
        </View>
      );


    return (
        <View style={styles.container}>
           <FlatList
            data = {shoppingsCart}
            emptyFlatList={emptyFlatList}
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
    },
    emptyShoppingCart: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
      },

});

export default ShoppingCartList;