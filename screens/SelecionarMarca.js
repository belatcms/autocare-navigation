import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ListaItem from '../components/ListaItens'

const marcas = {
  Carro: ['Renault', 'Jeep', 'Ford'],
  Moto: ['Honda', 'Fa', 'Yamaha'],
  Caminhao: ['Scania', 'Iveco']
}

export default function SelecionarMarca ({navigation, route}) {
  const tipo = route.params.tipo;
  
  return (
    <View>
      <SimpleHeader
      titulo="Selecione a Marca do veículo"
      onPress={() => navigation.goBack()} navigation={navigation} />
     <FlatList
     data={marcas[tipo]}
     renderItem={({item}) =>
     <ListaItem
      texto={item}
      onPress={() => navigation.navigate('selecionarModelo', {tipo, marca: item})}
    />
     }
   />
   </View>   
  )
}