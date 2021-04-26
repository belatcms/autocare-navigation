import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

export default function ListaItem({texto, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.listaItem}>
        <Text style={styles.texto}>{texto}</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listaItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d1d1d6',
    display: "flex",
    flexDirection: "row"
  },
  texto: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#333333',
    lineHeight: 20,
    flexGrow: 1
  }
})
