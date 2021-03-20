import React from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground} from "react-native";
// import { useWindowDimensions } from 'react-native';
const {width, height} = Dimensions.get("window").width * 0.80,


// import JoliePinkProfile from "../screens/JoliePinkProfile";

// import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const JoliePinkMenu = () => {
    // const dimensions = useWindowDimensions();
    return(
    //     <Drawer.Navigator 
    //  drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}>
    //      <Drawer.Screen name="Menu" component={JoliePinkMenu} />
    // </Drawer.Navigator>
    <View> 
        <Text>Holis</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    boton :{
        backgroundColor: '#bd787d',
        padding: 10,
        borderRadius: 50
    },
    botonTexto:{
        color: "#f2ebe8",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
});
export default JoliePinkMenu;
