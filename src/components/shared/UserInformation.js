import React,{useContext} from "react";

import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";

import { Card } from "react-native-elements";

const {width, height} = Dimensions.get("screen");

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
           {/* <FlatList
            data = {users}
            emptyFlatList = {emptyFlatList}
            keyExtractor = {(item) => item.id.toString()}
            renderItem={({item}) => (
                    <>
                    <View style ={styles.informacion}>
                      <Text>{item.nombreCompleto}</Text>
                      <Text>hola</Text>
                    </View>
                    </>   
            )}
            /> */}
            <FlatList
            data = {personalsInformation}
            emptyFlatList = {emptyFlatList}
            keyExtractor = {(item) => item.id.toString()}
            renderItem={({item}) => (
                    <>
                    <View style ={styles.informacion}>
                      <Text>{item.direccion}</Text>
                      <Text>{item.telefono}</Text>
                      <Text>{item.codigoPostal}</Text>
                     
                    </View>
                    </>   
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      // backgroundColor: "white",
      width: width * 1,
      height: height * 0.2,
     
    },
    emptyPersonalInformation: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "red"
      },
      informacion:{
        justifyContent:"center",
      alignContent:"center",
      margin: 10
      // alignItems:"center",
      }

});

export default UserInformation;