import * as React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import FloatButton from '../components/Botao';


import Nav from '../components/Navbar'
import Nav2 from '../components/Navbar2'
import Itens from '../components/CardItens'
import BotaoTela from '../components/Botao'
import Footer from '../components/Footer'

const Manu = [
  {titulo: 'Troca de bateria', data: '22/07/2019', km: '9300km', proximokm: '9550 (2500km)', tipo: 'battery'},
  {titulo: 'Troca de Oleo', data: '05/05/2018', km: '6650km', proximokm: '9550 (2500km)', tipo: 'oil'},
  {titulo: 'Troca de Pneu D', data: '28/06/2017', km: '5540km', proximokm: '9550 (2500km)', tipo: 'car'},
  {titulo: 'Troca de Pneu T', data: '08/08/2015', km: '3900km', proximokm: '9550 (2500km)', tipo: 'back'}
]

export default function ManutencaoScreen({navigation, route}) {
  return (
      <View style={{flex: 1}}>
        <Nav />
        <Nav2 navigation={navigation} />
        <View style={{flex: 1}}>
          <FlatList
            data={Manu}
            renderItem={
              ({item}) => <Itens titulo={item.titulo} data={item.data} km={item.km} proximokm={item.proximokm} tipo={item.tipo}/>
            }
          />
        </View>
        <FloatButton
        onPress={() => navigation.navigate('registro')}
        bottom={280}
        icon={<MaterialIcons name="camera-alt" size={24} color="white" />}
      />
      <FloatButton
        onPress={() => navigation.navigate('alarme')}
        bottom={190}
        icon={<MaterialIcons name="access-alarm" size={24} color="white" />}
      />
      <FloatButton
        onPress={() => navigation.navigate('sos')}
        bottom={100}
        icon={<FontAwesome5 name="hands-helping" size={24} color="white" />}
      />
      <FloatButton
        onPress={() => navigation.navigate('cadastrarManutencao')}
      />
        <Footer />
     </View>
  );
}

 