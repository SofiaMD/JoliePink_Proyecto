import React,{useContext} from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { Card } from "react-native-elements";


import {Context as PersonalInformationContext} from "../../providers/PersonalInformationContext";


const UserInformation = ({navigation, personalsInformation}) =>{

    const {state, setCurrenteInformation} =useContext(PersonalInformationContext);


    const handleSelect = (personalInformation) => {
        setCurrenteInformation(personalInformation);
        navigation.navigate("Profile");
    };


    const emptyFlatList = (
        <View style={styles.emptyPersonalInformation}>
          <Text>No has agregado articulos al carrito...</Text>
        </View>
      );


    return(

        <View style={styles.container}>
            <FlatList
            data = {personalsInformation}
            emptyFlatList = {emptyFlatList}
            keyExtractor = {(item) => item.id.toString()}
            renderItem={({item}) => (
                    <>
                    <Text>{item.direccion}</Text>
                    <Text>{item.telefono}</Text>
                    <Text>{item.codigoPostal}</Text>
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

export default UserInformation;