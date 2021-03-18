import React from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground} from "react-native";
import { useWindowDimensions } from 'react-native';


import JoliePinkProfile from "../screens/JoliePinkProfile";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
    const dimensions = useWindowDimensions();

    return(
    <Drawer.Navigator 
     drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}>
         <Drawer.Screen name="Profile" component={JoliePinkProfile} />

    </Drawer.Navigator>
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
export default DrawerMenu;
