import React, {useEffect}  from 'react';

import {Platform} from 'react-native'
import Constants from 'expo-constants'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';

import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

import ManutencaoScreen from './screens/Manutencao'
import AddVeiculoScreen from './screens/AddVeiculo'
import SelecionarMarca from './screens/SelecionarMarca'
import SelecionarModelo from './screens/SelecionarModelo'
import SelecionarTipoScreen from './screens/SelecionarTipo'
import Confirmacao from './screens/Confirmacaodados'
import SOSScreen from './screens/SOSScreen'
import AlarmeScreen from './screens/Alarme'
import RegistroOcorrencia from './screens/RegistroOcorrencia'

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    registrarPushNotification()
  }, [])

  async function registrarPushNotification() {
    if(Constants.isDevice) {
      let {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)

      if(status !== 'granted') {
        let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      }

      if(status !== 'granted') {
        alert('É necessária a permissão de notificação para receber promoções dos nosso parceiros.')
        return
      }

      const expoToken = await Notifications.getExpoPushTokenAsync()
      const token = expoToken.data
      console.log(token)

      if(Platform.OS === 'android') {
        console.log('Dispositivo Android')

        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C'
        })
      }
    }
  }

  return (

    <NavigationContainer style={styles.container}>
      <Stack.Navigator headerMode="none" initialRouteName="home">
        <Stack.Screen name="home" component={ManutencaoScreen} />
        <Stack.Screen name="addVeiculo" component={AddVeiculoScreen} />
        <Stack.Screen name="SelecionarTipo" component={SelecionarTipoScreen} />
        <Stack.Screen name="selecionarMarca" component={SelecionarMarca} />   
        <Stack.Screen name="selecionarModelo" component={SelecionarModelo} />
        <Stack.Screen name="ConfirmacaoDados" component={Confirmacao} />  
        <Stack.Screen name="sos" component={SOSScreen} />
        <Stack.Screen name="alarme" component={AlarmeScreen} />
        <Stack.Screen name="registro" component={RegistroOcorrencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
 