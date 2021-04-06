import React from "react";
import { StyleSheet, View, Text, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Card, 

} from "react-native-elements";

const {width, height} = Dimensions.get("window");


const JoliePinkPurchasingProcess = () =>{

    return(
      

        <FlatList
        data = {dress}
        keyExtractor = {(item) => item.id.toString()}
        renderItem ={({item}) =>{
                        return (
                            <View> 
                                <Card style ={styles.cardImage}>
                                        <View style={styles.contenedorImagen}> 
                                           
                                         <Image source={{uri:`${item.imagen}`, }} 
                                            style ={styles.image}/>
                                            <View style= {styles.contenedorInformacion}>
                                                <Text>{item.nombre}</Text>    
                                                <Text>{item.precio}</Text> 
                                                <Text>{item.talla}</Text>
                                                
                                                <Text>{item.talla}</Text>
                                            </View>    
                                </View>
                               
                                </Card>
                            </View>
                        )
                    }}  
        />
        )
    }
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center"
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
            backgroundColor: "#DED1DB"
        },
        contenedorInformacion:{
            marginTop: 10,
            flexDirection: "column",
            marginLeft: 10
        },
    
    });
    

export default JoliePinkPurchasingProcess;