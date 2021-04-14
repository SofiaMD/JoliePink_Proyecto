import React, {useContext, useState} from "react";
import {ImageBackground} from "react-native";
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from "react-native";
import {Header, Card} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NuevaColeccion from "../shared/NewCollection";
import Carousel, {Pagination} from 'react-native-snap-carousel'

import CarouselNewCollection, {SLIDER_WIDTH, ITEM_WIDTH} from "../shared/CarouselNewCollection";

import {Context as AuthContext} from "../../providers/AuthContext";
import { color } from "react-native-reanimated";

const {width, height} = Dimensions.get("window");

const JoliePinkNewCollection = () =>{
   

    const isCarousel = React.useRef(null)

    return(
        <SafeAreaProvider style={styles.container}>
            <View style = {styles.contenedorTexto}>
                <Text style={styles.proximamente}>Proximamente</Text>
                <Text style={styles.nueva}>¡Nueva Colección!</Text>
            </View>
           
            <View >
                <View style={styles.contenedorRopa}>
                    <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={NuevaColeccion}
                    renderItem={CarouselNewCollection}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ddd2ce',
        flex:1,
        flexDirection: "column"
    },
    contenedorRopa:{
        flexDirection: "row",
        width: width * 1,
        height: height * 0.80,
        marginTop: 10
    },
    contenedorTexto:{
        justifyContent: "center",
        alignContent: "center",
        alignItems:"center",
    },
    nueva:{
        fontSize: 40,
        // marginTop: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems:"center",
        // marginLeft: 50,
        color:"#bd787d",
        
    },
    proximamente:{
        fontSize: 30,
        marginTop: 30,
        color:"black",
        
    }
})

export default JoliePinkNewCollection;