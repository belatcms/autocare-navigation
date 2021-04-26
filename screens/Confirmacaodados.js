import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ListaItem from '../components/ListaItens'

export default function Confirmacao ({navigation, route}) {
  const tipo = route.params.tipo;
  const marca = route.params.marca;
  const modelo = route.params.modelo;
  
  return (
    <View>
      <SimpleHeader titulo="Concluir dados!"
      onPress={() => navigation.goBack()} navigation={navigation} 
      />

      <View style={styles.listaItem}>
        <Text style={styles.texto}>Tipo: {tipo}</Text>
        <Text style={styles.texto}>Marca: {marca}</Text>
        <Text style={styles.texto}>Modelo: {modelo}</Text>
      </View>
   </View>   
  )
}

const styles = StyleSheet.create({
  listaItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d1d1d6',
    display: "flex",
    alignItems: 'center'
  },
  texto: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#333333',
    lineHeight: 20,
    flexDirection: "row",
    flexGrow: 1
  }
})