import React from 'react';
import LottieView from 'lottie-react-native';
import animationGoogle from '../assets/59456-google-advertisement.json';
import { View, StyleSheet } from 'react-native';

export function Load(){

    return(
        <View style = {styles.container}>
            <LottieView source={animationGoogle} autoPlay loop style={styles.animation}></LottieView>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation:{
        backgroundColor: 'transparent',
        width: 250,
        height: 250
    }
})