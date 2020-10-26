import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading} from  'expo';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'; //O useFonts pode ser importado tando das fontes do ubunto quanto das fontes do roboto

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({  //As fontes utilizadas no projeto devem ser carregadas no inicio do projeto
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading /> //enquanto as fontes não forem carregadas, irá mostrar uma tela de carregamento; 
  } 
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}