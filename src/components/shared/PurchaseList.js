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
} from "react-native-elements";


import Purchase from "../shared/Purchase";

import {Context as PurchaseContext} from "../../providers/PurchaseContext";


const PurchaseList = ({navigation,purchases}) =>{


    const {state, setCurrentPurchase} = useContext(PurchaseContext);
    
    const emptyFlatList = (
        <View style={styles.emptyShoppingCart}>
          <Text>No has realizdo ninguna compra...</Text>
        </View>
      );

    return(
        <View style={styles.container}>
           <FlatList
            data = {purchases}
            ListEmptyComponent={emptyFlatList}
            keyExtractor = {(item) => item.id}
            renderItem ={({item}) =>(
                <>
                     
                        <Purchase
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            cantidad={item.cantidad}
                            talla={item.talla}
                            color={item.color}
                            img={item.img}
                            total={item.total}
                        />
                        <TouchableOpacity onPress = {()=>  navigation.navigate("Profile")}>
                    </TouchableOpacity>
                    </>   
                            
                )}  
            />
    </View>
    )

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   flexDirection: "column",
    },
    emptyShoppingCart: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
      },

});
export default PurchaseList;