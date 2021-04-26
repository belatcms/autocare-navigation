import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ListaItem from '../components/ListaItens'
import {getTipos} from '../utils/ApiUtils'

const veiculos = [
  {tipo: 'Moto', marca: 'Titan',modelo : '3022'},
  {tipo: 'Carro', marca: 'Kwid',modelo : '2008'},
  {tipo: 'Caminhao', marca: 'Scania',modelo : '095'},
]


export default function AddVeiculoScreen({navigation, route}) {

  const [tipos, setTipos] = useState([])
 const {setVeiculo} = route.params;
  const goBack = () => {
    navigation.goBack();
    //navigation.navigate('home');
  };
async function carregarTipos(){
     const tipos = await getTipos()
     setTipos(veiculos)
}

  return (
    <View>
      <SimpleHeader titulo="Selecione o tipo do Veiculo" navigation={navigation} />
      <View style={styles.body}>
        <ListaItem
          texto="Novo Carro"
          onPress={() => {
            navigation.navigate('selecionarMarca', {tipo: 'Carro'})
          }}
         /> 
         <ListaItem
          texto="Nova Moto"
           onPress={() => {
            navigation.navigate('selecionarMarca', {tipo: 'Moto'})
          }}
         /> 
         <ListaItem
          texto="Novo Caminhão"
           onPress={() => {
            navigation.navigate('selecionarMarca', {tipo: 'Caminhao'})
          }}
         /> 
          <FlatList
            data={veiculos}
            renderItem={({item}) => 
            <ListaItem texto={`${item.tipo} ${item.marca} ${item.modelo}`}
            onPress={() => { navigation.goBack()}} />}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
{
  body: {
    padding: 16
  }
})