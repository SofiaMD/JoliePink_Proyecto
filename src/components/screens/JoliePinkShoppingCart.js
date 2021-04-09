import React,{useContext,useEffect} from "react";

import {StyleSheet,View,Text,FlatList} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {Card,Header} from "react-native-elements"
import { Context as AuthContext } from "../../providers/AuthContext";
import {Context as ShoppingCartContext} from "../../providers/ShoppingCartContext";


import ShoppingCartList from "../shared/shoppingCartList";

const JoliePinkShoppingCart = ({navigation}) =>{
    const { state, signout } = useContext(AuthContext);
    const { state: shoppingCartState,getShoppingCart, clearMessage } = useContext(ShoppingCartContext);


    useEffect(() => {
        getShoppingCart(state.user.id);
      }, []);

    useEffect(()=>{

        console.log(shoppingCartState);
    },[shoppingCartState]);

    //   useEffect(() => {
    //     if (shoppingCartState.errorMessage) {
    //     //   Toast.show({
    //     //     text2: shoppingCartState.errorMessage,
    //     //   });
    //       clearMessage();
    //     }
    //   }, [shoppingCartState.errorMessage]);
    return(
        <SafeAreaProvider>
        <Header 
            centerComponent={{ text: 'Carrito de Compras', style: { color: '#f9ece9', fontSize: 25 }}}
            containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
        />
        <View style= {styles.container}>
            <ShoppingCartList shoppingsCart={shoppingCartState.shoppingsCart} navigation={navigation} />
        </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({

     container:{
         flex:1,
         justifyContent: "center",
         alignContent: "center"
     }
});


export default JoliePinkShoppingCart;
