import React, {useContext, useState }from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Dimensions,Image, TouchableOpacity } from "react-native";
import { Header, } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Carousel, { Pagination } from 'react-native-snap-carousel'

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "../shared/CarouselCardItem";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';

import { Context as  AuthContext} from "../../providers/AuthContext";

const {width, height} = Dimensions.get("window");


import Button from "../../components/shared/Button";
// import { useContext } from "react";


const JoliePinkHome = ({navigation}) =>{
    const { signout } = useContext(AuthContext);
    const [index, setIndex] = React.useState(0)
  
     const data = [
        {
          imgUrl: "https://i.ibb.co/ZzTDyh0/unknown-1.png"
        },
            {
            imgUrl: "https://i.ibb.co/6ggMLHp/unknown-2.png"
          },
          {
            imgUrl: "https://i.ibb.co/CQwmT8T/unknown-3.png"
          },
          {
            imgUrl: "https://i.ibb.co/s1WJQH7/unknown.png"
          },
          {
            imgUrl: "https://i.ibb.co/FYkyjDD/unknown-4.png"
          },
          {
            imgUrl: "https://i.ibb.co/Jn5Zytz/unknown-5.png",
            
          }
        
      ]

      const isCarousel = React.useRef(null)



    return(

        
        <SafeAreaProvider>
            <Header 
                centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
                containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
            />
            <View style={styles.container}> 
                <View style={styles.contenedorRopa}> 
                <Carousel
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
              />
                </View>
                <Text style={styles.textoNueva}>Nueva Colección</Text>
                    <View style={styles.contenedorBotones}>
                    <Button title="Lo más vendido" callback ={() => {navigation.navigate("MostSold")}}/>
                    <Button title="Nueva colección" callback ={() => {navigation.navigate("NewCollection")}}/>
                    </View>
                    <View style={styles.contenedorImagen}>
                        <Image style= {styles.imagenRopa} source = {require("../../../assets/ropa.jpg")}/>
                        <Image style= {styles.imagenRopa} source = {require("../../../assets/ropa4.jpg")}/>
                    </View> 
            </View>
        </SafeAreaProvider> 
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor:"#ddd2ce"
    },
    contenedorRopa:{
        flexDirection: "row",
        width: width * 1,
        height: height *0.30,
        marginTop: 10
    },

    contenedorBotones:{
        width: width * 1,
        height: height *0.12,
        flexDirection: "row"
    },
    
    contenedorImagen:{
        flexDirection: "row",
        width: width * 1,
        height: height *0.40,
    },

    imagenropa:{
        width: 100,
        height: 100,
    },

    imagenRopa:{
        width: width * 0.50,
        height: height *0.40,
    },

    textoNueva: {
        color: "#21130d",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 4,

        fontSize: 25
    }

});

export default JoliePinkHome;