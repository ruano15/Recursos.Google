import React from "react";
import { Category } from "../models/Category";
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface CategoryProps extends RectButtonProps{
    category: Category
}

export const CategoryCard = ({category, ...rest}: CategoryProps) => {

    return(

        <View>
            <RectButton style={styles.container} {...rest}>
                <Image source={category.image} style={styles.img}></Image>
                <Text style={styles.text}>{category.name}</Text>
            </RectButton>
        </View>

    )

}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        width: 135,
        height: 135,
        backgroundColor: colors.gray,
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: "center",
        margin: 10,
    },
    text:{
        color: colors.white,
        fontFamily: fonts.heading,
        textAlign:"center",
        marginVertical: 16,
    },
    img:{
        width: 80,
        height: 80,
    }

})