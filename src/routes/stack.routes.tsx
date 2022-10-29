import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/Welcome";
import { Home } from "../pages/Home";

const stackRoutes = createNativeStackNavigator();

const AppRoutes : React.FC = (() => (

    <stackRoutes.Navigator
    screenOptions={{
        headerShown: false,
        headerTransparent: true,
        title: ''}}>
        <stackRoutes.Screen name = 'Welcome' component={Welcome} />
        <stackRoutes.Screen name = 'Home' component={Home} />
    </stackRoutes.Navigator>
))

export default AppRoutes;