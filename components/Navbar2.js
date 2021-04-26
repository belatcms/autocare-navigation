import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';

export default function Nav2({navigation}) {
  return (
    <View>
      <View style={styles.headline}>
        <Text style={styles.titulo}>Manutenções da MT 07</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('addVeiculo', {mensagem: 'TESTE'})}
        >
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
   headline: {
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     height: 50,
     backgroundColor: 'steelblue'
  },
  titulo: {
    textAlign: 'center',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
});

 