import React,{useContext,useEffect} from "react";
import {StyleSheet,View,Text} from "react-native";

import { SafeAreaProvider} from "react-native-safe-area-context";

import {Card,Header} from "react-native-elements";
import { Context as AuthContext } from "../../providers/AuthContext";

import {Context as PurchaseContext} from "../../providers/PurchaseContext";

import PurchaseList from "../shared/PurchaseList";

const JoliePinkPurchases = ({navigation}) =>{

    const { state, signout } = useContext(AuthContext);
    const { state: purchasesState,getPurchases, clearMessage } = useContext(PurchaseContext);


    useEffect(() => {
        getPurchases(state.user.id);
      }, []);

    useEffect(()=>{

        console.log(purchasesState);
    },[purchasesState]);

    return (
       
        <View style= {styles.container}>
           <PurchaseList purchases={purchasesState.purchases} navigation = {navigation}/>
           
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignContent: "center"
    }
});

export default JoliePinkPurchases;
