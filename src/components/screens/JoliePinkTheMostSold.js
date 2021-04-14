import React, {useContext} from "react";
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, FlatList} from "react-native";
import {Header, Card} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoMasVendido from "../shared/LoMasVendido";

const {width, height} = Dimensions.get("window");

const JoliePinkTheMostSold = ({navigation}) =>{
 return(
    <FlatList
    data = {LoMasVendido}
    keyExtractor = {(item) => item.id.toString()}
    renderItem ={({item}) =>{
                    return (
                        <View> 
                            <TouchableOpacity onPress = {() => {navigation.navigate("PurchansingProcess",{id:item.id,
                            nombre: item.nombre, img : item.imagen, precio: item.precio,talla: item.talla, categoriaPrenda:"blusas"})}}>
                            <Card>
                                    <View style={styles.contenedorImagen}> 
                                     <Image source={{uri:`${item.imagen}`, }} 
                                        style ={styles.image}/>
                                        <Text>{}</Text>
                                        <View style= {styles.contenedorInformacion}>
                                          <View style={styles.contenedorNombre}>
                                            <Text style={styles.nombre}>{item.nombre}</Text> 
                                          </View>
                                            {/* <Text style={styles.nombre}>{item.nombre}</Text>     */}
                                            <Text>{}</Text>
                                            <Text>Precio: L.{item.precio}</Text> 
                                            <Text>{}</Text>
                                            <Text>Tallas: XS,S,M,L,XL</Text>
                                            <Text>{}</Text>
                                            <View style={styles.contenedorBotones} >
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
    height: height * 0.30
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
    // marginTop: 90,
    flexDirection: "row",
    marginLeft: 2,
    
},
contenedorInformacion:{
    marginTop: 10,
    flexDirection: "column",
    marginLeft: 10,

},
contenedorNombre:{
    marginTop: 10,
    width: width * 0.40
},
botonCompra:{
    marginTop: 10
},
nombre:{
  fontSize: 16
}
})
export default JoliePinkTheMostSold;