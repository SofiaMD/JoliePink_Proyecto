import React from "react";
import {StyleSheet, View,Text, Dimensions, Image} from "react-native";
import {Card, ListItem} from "react-native-elements";

const {width, height} = Dimensions.get("window");

const CardList =({titulo}) =>{


    const dress = [
        {
            name: 'Bolso 1',
            img :'https://i.ibb.co/DWsgTp5/Bolso1.jpg'
        },
        {
            name: 'Bolso 2',
            img :'https://i.ibb.co/DWsgTp5/Bolso1.jpg'
        },
        {
            name: 'Bolso 3',
            img :'https://i.ibb.co/DWsgTp5/Bolso1.jpg'
        },
        {
            name: 'Bolso 4',
            img :'https://i.ibb.co/DWsgTp5/Bolso1.jpg'
        }

    ]
    return(
       <Card style= {styles.container}>
            <Card.Title style= {styles.contenedorTitulo}>{titulo}</Card.Title>
            <Card.Divider/>
            {
                dress.map((u, i) => {
                return (
                    <View key={i} style={styles.contenedorImagen}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.img }}
                        />
                        <Text style={styles.informacion}>{u.name}</Text>
                        <Text style={styles.informacion}>{"\n"}holis</Text>
                        <Text style={styles.informacion}>{"\n"}{"\n"}Holis</Text>
                    </View>
                );
                })
            }
       </Card>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    },
    contenedorTitulo:{
        
        fontWeight: "bold",
        fontSize: 70,
        backgroundColor: "#DED1DB",
        height: height * 0.06,
        borderColor: "#DED1DB"
        // color: "#DED1DB"
    },
    image: {
        width: width * 0.40,
        height: height * 0.20
    },
    contenedorImagen: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#DED1DB",
        // backgroundColor: "#bd787d",
       
    },
    informacion:{
        fontWeight: "bold",
        marginTop: 5, 
        marginLeft: 5, 
        marginRight:5
    }
});

export default CardList;