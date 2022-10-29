import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import welcome from '../assets/welcome.jpg';
import { Entypo } from '@expo/vector-icons';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome(){
    
    const navigation = useNavigation();

    function handleHome(){
        navigation.navigate('Home');
    }

    return(
        <SafeAreaView style={styles.container}>

        <Image source={welcome} resizeMode= 'contain' style={styles.image}/>

        <Text style={styles.msgWelcome}>
            Encontre os recursos Google para sua formação.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleHome}>
            <Entypo name="chevron-with-circle-right" style={styles.icon} />
        </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 25,
    },
    image:{
        height: Dimensions.get("window").width * 0.7,
    },
    msgWelcome:{
        fontSize: 18,
        textAlign: "center",
        fontFamily: fonts.txt
    },
    button:{
        backgroundColor: colors.dark_blue,
        justifyContent:"center",
        alignItems:"center",
        color: colors.white,
        marginBottom: 10,
        borderRadius: 16,
        height: 56,
        width: 92,
    },
    icon:{
        color: colors.white,
        fontSize: 24,
    }
})