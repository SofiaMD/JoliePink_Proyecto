import React, {useContext} from "react";
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from "react-native";
import {Header, Card} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get("window");

const JoliePinkTheMostSold = () =>{

    const LoMasVendido=[
        {
            "id": 2,
            "nombre": "Bikini dos piezas con hojas",
            "talla": ["xs","s","m","l","xl"],
            "precio": "600",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/G3Y2B59/bikini2.jpg"
          },
          {
            "id": 8,
            "nombre": "Bikini abdomen descubierto diagonal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/wpnSrWp/bikini1.jpg"
          },
          {
            "id": 9,
            "nombre": "Bikini dos piezas agarre a un hombro",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/vhFqH2m/bikini2.jpg"
          },
        {
            "id": 1,
            "nombre": "Blusa brillante espalda descubierta",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/NnSn1V3/Blusas1.jpg"
          },
          {
            "id": 8,
            "nombre": "Blusa manga al codo hombros descubiertos",
            "talla": ["xs","s","m","l","xl"],
            "precio": "700",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/NNF5zMD/blusa1.jpg"
          },
          {
            "id": 11,
            "nombre": "Blusa floreada mangas largas al hombro",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/37vScgp/blusa4.jpg"
          },
        {
            "id": 1,
            "nombre": "Bolso con agarradera pequeña y cadena",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/DWsgTp5/Bolso1.jpg"
          },
          {
            "id": 8,
            "nombre": "Diademas delagadas con perlas",
            "talla": ["xs","s","m","l","xl"],
            "precio": "400",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/9r76GbV/accesorio1.jpg"
          },
          {
            "id": 10,
            "nombre": "Pasadores de oceano bañados en oro ",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/M7wKWjJ/accesorio3.jpg"
          },
        {
            "id": 1,
            "nombre": "Chaqueta estilo artesanal semiformal",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/vmvTGsp/Chaquetas1.jpg"
          },
          {
            "id": 4,
            "nombre": "Chaqueta rayada con estilo artesanal en borde",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/KhjyCPh/Chaquetas4.jpg"
          },
          {
            "id": 11,
            "nombre": "Chaqueta de cuero casual",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/2jX0NB3/chaqueta4.jpg"
          },
        {
            "id": 7,
            "nombre": "Pantalon estilo culotte largo a la cintura",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1000",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/4NKc5x4/Pantalon7.jpg"
          },
          {
            "id": 8,
            "nombre": "Jean a la cintura",
            "talla": ["xs","s","m","l","xl"],
            "precio": "800",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/mNT5sv1/pantalon1.jpg"
          },
          {
            "id": 12,
            "nombre": "Pantalo con cadena casual",
            "talla": ["xs","s","m","l","xl"],
            "precio": "900",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/9cCgvvy/pantalon5.jpg"
          },
        {
            "id": 10,
            "nombre": "Vestido de seda corto ceñido al cuerpo con agarres",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1100",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/pXdT2yb/vestido3.jpg"
          },
          {
            "id": 11,
            "nombre": "Vestido largo ceñido al cuerpo corte en la pierna",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1200",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/68gp0pS/vestido4.jpg"
          },
          {
            "id": 12,
            "nombre": "Vestido medio ceñido al cuerpo corte en la pierna",
            "talla": ["xs","s","m","l","xl"],
            "precio": "1200",
            "color":["rosa","blanco","negro","amarillo"],
            "imagen": "https://i.ibb.co/BP39kq1/vestido5.jpg"
          },
    ]
 //   return(
 //       <SafeAreaProvider>
 //           <Header
 //            centerComponent={{ text: 'Lo mas vendido', style: { color: '#f9ece9', fontSize: 25 }}}
 //            containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around'} }
 //           />
 //       </SafeAreaProvider>
 //   )
 return(
    <FlatList
    data = {LoMasVendido}
    keyExtractor = {(item) => item.id.toString()}
    renderItem ={({item}) =>{
                    return (
                        <View> 
                            <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                            nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla})}}>
                            <Card style ={styles.cardImage}>
                                    <View style={styles.contenedorImagen}> 
                                     <Image source={{uri:`${item.imagen}`, }} 
                                        style ={styles.image}/>
                                        <Text>{}</Text>
                                        <View style= {styles.contenedorInformacion}>
                                            <View><Text>{item.nombre}</Text></View>    
                                            <Text>{}</Text>
                                            <Text>Precio: L.{item.precio}</Text> 
                                            <Text>{}</Text>
                                            <Text>Tallas: {item.talla.map((index) =>(
                                                <Text style={styles.texto}>
                                                {" "}{index}
                                                </Text>
                                            ))}</Text>
                                            <Text>{}</Text>
                                            <View style={styles.contenedorBoton} >
                                                <Text >Colores:</Text>
                                                <TouchableOpacity
                                                    style={{
                                                        margin:1,
                                                        borderWidth:1,
                                                        borderColor:'#bd787d',
                                                        alignItems:'center',
                                                        justifyContent:'center',
                                                        width:20,
                                                        height:20,
                                                        backgroundColor:'#bd787d',
                                                        borderRadius:50,
                                                        }}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{
                                                        margin:1,
                                                        borderWidth:1,
                                                        borderColor:'rgba(0,0,0,0.2)',
                                                        alignItems:'center',
                                                        justifyContent:'center',
                                                        width:20,
                                                        height:20,
                                                        backgroundColor:'#fff',
                                                        borderRadius:50,
                                                        }}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{
                                                        margin:1,
                                                        borderWidth:1,
                                                        borderColor:'rgba(0,0,0,0.2)',
                                                        alignItems:'center',
                                                        justifyContent:'center',
                                                        width:20,
                                                        height:20,
                                                        backgroundColor:'#000000',
                                                        borderRadius:50,
                                                        }}
                                                    >
                                                </TouchableOpacity>
                                            </View>
                                        </View>    
                                    </View>
                                 </Card>
                            </TouchableOpacity>
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
        alignContent: "center",
        // backgroundColor: "#DED1DB"
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
        backgroundColor: "#DED1DB",
        // backgroundColor: "#bd787d",
       
    },
    contenedorBotones:{
        marginTop: 90,
        flexDirection: "row",
        marginLeft: 2
    },
    contenedorInformacion:{
        marginTop: 10,
        flexDirection: "column",
        marginLeft: 10
    },
    botonCompra:{
        marginTop: 10
    }

});

export default JoliePinkTheMostSold;