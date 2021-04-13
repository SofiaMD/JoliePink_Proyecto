import React, {useContext, useState }from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, Text, Dimensions,Image, TouchableOpacity } from "react-native";
import { Header, } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { Context as  AuthContext} from "../../providers/AuthContext";

const {width, height} = Dimensions.get("window");


import Button from "../../components/shared/Button";
// import { useContext } from "react";




const JoliePinkHome = ({navigation}) =>{
    const { signout } = useContext(AuthContext);
    // const items = [
    //     {
    //       src: 'https://i.pinimg.com/originals/a6/6c/00/a66c0067057317c71a71e517dff662c2.png',
    //       altText: 'Slide 1',
    //       caption: 'Slide 1'
    //     },
    //     {
    //       src: 'https://todoimagenesde.com/wp-content/uploads/2018/11/Moda2.jpg',
    //       altText: 'Slide 2',
    //       caption: 'Slide 2'
    //     },
    //     {
    //       src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrquvS2XVnuCSlUwT-H-Z4OnywO4AfxzoAhw&usqp=CAU',
    //       altText: 'Slide 3',
    //       caption: 'Slide 3'
    //     },
    //     {
    //         src: 'https://i.ibb.co/LN3Cv6C/slider4.png',
    //         altText: 'Slide 4',
    //         caption: 'Slide 4'
    //     },
    //     {
    //         src: 'https://i.ibb.co/MNyw3gR/slider5.png',
    //         altText: 'Slide 5',
    //         caption: 'Slide 5'
    //     },
    //     {
    //         src: 'https://i.ibb.co/qr8pVcm/slider6.png',
    //         altText: 'Slide 6',
    //         caption: 'Slide 6'
    //     },
    //     {
    //         src: 'https://i.ibb.co/C5HKStW/slider7.png',
    //         altText: 'Slide 7',
    //         caption: 'Slide 7'
    //     },
    //     {
    //         src: 'https://i.ibb.co/MgbwSKW/slider8.png',
    //         altText: 'Slide 8',
    //         caption: 'Slide 8'
    //     },
    //   ];
    //     const [activeIndex, setActiveIndex] = useState(0);
    //     const [animating, setAnimating] = useState(false);
      
    //     const next = () => {
    //       if (animating) return;
    //       const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //       setActiveIndex(nextIndex);
    //     }
      
    //     const previous = () => {
    //       if (animating) return;
    //       const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    //       setActiveIndex(nextIndex);
    //     }
      
    //     const goToIndex = (newIndex) => {
    //       if (animating) return;
    //       setActiveIndex(newIndex);
    //     }
      
    //     const slides = items.map((item) => {
    //       return (
    //         <CarouselItem
    //           onExiting={() => setAnimating(true)}
    //           onExited={() => setAnimating(false)}
    //           key={item.src}
    //         >
    //           <img src={item.src} alt={item.altText} width="100%" height="100%"/>
    //           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //         </CarouselItem>
    //       );
    //     });

    return(
        <SafeAreaProvider>
            <Header 
                centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
                containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
            />
            <View style={styles.container}> 
                <View style={styles.contenedorRopa}> 
                </View>
                
                <Text style={styles.textoNueva}>Nueva Colección</Text>
                    <View style={styles.contenedorBotones}>
                    <Button title="Lo más vendido" callback ={() => {navigation.navigate("Pay")}}/>
                    <Button title="Nueva colección" callback ={() => {navigation.navigate("Home")}}/>
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
        flexDirection: "column"
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