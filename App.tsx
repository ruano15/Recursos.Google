import { Lato_400Regular, Lato_700Bold, useFonts } from '@expo-google-fonts/lato';
import React from 'react';
import Loading from 'expo-app-loading'
import { Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  
  const [fontsLoaded] = useFonts({Lato_400Regular, Lato_700Bold})
  if(!fontsLoaded){
    return 
    <Loading></Loading>
  }

  return(
    <Routes />
  )
};
