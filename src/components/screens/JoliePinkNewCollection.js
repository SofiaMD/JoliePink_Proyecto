import React, {useContext, useState} from "react";
import {ImageBackground} from "react-native";
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from "react-native";
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NuevaColeccion from "../shared/NewCollection";
import Carousel, {Pagination} from 'react-native-snap-carousel'

import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from "../shared/CarouselCardItem";

import {Context as AuthContext} from "../../providers/AuthContext";

const {widt, height} = Dimensions.get("window");

const JoliePinkNewCollection = () =>{
   

    const isCarousel = React.useRef(null)

    return(
        <SafeAreaProvider>
            <Header
            centerComponent={{ text: 'Nueva Coleccion', style: { color: '#f9ece9', fontSize: 25 }}}
            containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
            />
            <View style={styles.container}>
                <View style={styles.contenedorRopa}>
                    <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={NuevaColeccion}
                    renderItem={CarouselCardItem}
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

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column"
    },
    contenedorRopa:{
        flexDirection: "row",
        width: width * 1,
        height: height *0.30,
        marginTop: 10
    },
    imagenropa:{
        width: 100,
        height: 100,
    },

    imagenRopa:{
        width: width * 0.50,
        height: height *0.40,
    },
})

export default JoliePinkNewCollection;