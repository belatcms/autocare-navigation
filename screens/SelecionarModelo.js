import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ListaItem from '../components/ListaItens'

const modelo = {
  Carro: ['Kwid', 'HB20', 'Punto'],
  Moto: ['Honda PCX 150', 'Honda CRF 150F', 'Kawasaki Ninja 300'],
  Caminhao: ['Scania 658', 'VM 260', 'FH 460']
}

export default function SelecionarModelo ({navigation, route}) {
  const tipo = route.params.tipo;
  const marca = route.params.marca;
  
  return (
    <View>
      <SimpleHeader
      titulo="Selecione o modelo"
      onPress={() => navigation.goBack()} navigation={navigation} />
      <FlatList
      data={modelo[tipo]}
      renderItem={({item}) =>
      <ListaItem texto={item}
        onPress={() => navigation.navigate('ConfirmacaoDados', {tipo, marca, modelo: item})}
        />
     }
   />
   </View>   
  )
}