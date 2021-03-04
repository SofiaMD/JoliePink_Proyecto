import React from "react";
import { StyleSheet, View, Text, Dimensions,Image, ImageBackground} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import ButtonIcon from "../shared/ButtonIcon";
import DrawerMenu from "../shared/Drawer";

import {
    Input
} from "react-native-elements";

 import Button from "../shared/Button"

const JoliePinkSpecificCategory = ({navigation}) =>{
    return(
        <SafeAreaProvider>
            <View style = {styles.container}>
            <Header 
                leftComponent={<ButtonIcon name="menu" callback={<DrawerMenu/> }
                />}
                rightComponent={<ButtonIcon name="search"/>}
                centerComponent={{ text: 'JoliePink', style: { color: '#f9ece9', fontSize: 25 }}}
                containerStyle = { {backgroundColor : '#bd787d' , justifyContent : 'space-around', 
                  } }
            />
        <View style = {styles.container}>
            <Text>
               Esta categoria Especifica
            </Text>
        </View>
        </View></SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    }

});

export default JoliePinkSpecificCategory;