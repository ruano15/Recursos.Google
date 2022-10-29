import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header(props:{name:string, category:string, image:string}){

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.category}>{props.category}</Text>
            </View>
            <Image style={styles.image} source={props.image}></Image>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: getStatusBarHeight(),
    },
    name:{
        fontSize: 28,
        color: colors.dark_blue,
        fontFamily: fonts.txt
    },
    category: {
        fontSize: 28,
        color: colors.dark_blue,
        fontFamily: fonts.txt,
        lineHeight: 40,
    },
    image:{
        height: 70,
        width: 70,
        paddingLeft: 10,
        borderRadius: 35
    },

})