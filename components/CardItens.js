import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

function icones(tipo){
  switch(tipo)
  {
    case 'battery':
      return <FontAwesome5 name="car-battery" size={24} color="black" />
    case 'oil':
      return <FontAwesome5 name="oil-can" size={24} color="black" />
    case 'car':
      return <AntDesign name="upcircleo" size={24} color="black" />
    case 'back':
      return <AntDesign name="downcircleo" size={24} color="black" />
  }
}


export default function CardItens({titulo,data, km, proximokm, tipo}){
  return (
    <View style={styles.card}>
        <View style={styles.icone}> 
          <Text > {icones(tipo)} </Text>
        </View>
        <View style={styles.textosview}>
          <Text style={styles.titulo}>{titulo} </Text>
          <Text style={styles.texto}>
            Realizado em <Text style={styles.negrito}>{data}</Text>
          </Text>
          <Text style={styles.texto}>
            com <Text style={styles.negrito}>{km}</Text>
          </Text>
          <Text style={styles.texto}>
            Próxima troca <Text style={styles.negrito}>{proximokm}</Text>
          </Text>
        </View>
    </View>
      
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold'
  },
  icone: {
    flexBasis: 56,
  },
  card: {
    flexDirection: 'row',
    display: "flex",
    borderWidth: 2,
    padding: 15,
    borderColor: '#e4e4e4'
  },
  textosview: {
    flexGrow: 1
  },
   texto: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#999999',
    lineHeight: 26
  },
   negrito: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15
  }
});

