import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { Header } from "../components/Header";
import { Load } from "../components/Load";
import { Category } from "../models/Category";

export function Home(){

    const [load, setLoad] = useState(true);
    const categories:Category[] = [
        {
            name:"Trilhas autoformativas",
            image: require('../assets/trilha.jpg'),
        },
        {
            name:"Problemas/Soluções",
            image: require('../assets/problemas.jpg'),
        },
        {
            name:"Professor",
            image: require('../assets/professor.jpg'),
        },
        {
            name:"Aluno",
            image: require('../assets/aluno.jpg'),
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 4500)
    })


    if(load)
    return <Load></Load>

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header name='Olá' category='Educador(a)' image={require('../assets/professorAvatar.jpg')}></Header>
        </View>
        <View style={styles.categories}>
            <FlatList<Category>
                data={categories}
                keyExtractor={(item)=>String(item.name)}
                renderItem={({item})=>(
                    <CategoryCard category={item}
                    onPress={()=> console.log(item)}
                    ></CategoryCard>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
             />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    header:{
        paddingHorizontal: 30,
        marginTop: 20,
    },
    categories:{
        paddingHorizontal: 5,
        marginTop: 20,
    }


})