import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

export default function SimpleHeader({titulo, navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="md-arrow-round-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0053A0',
    display: 'flex',
    flexDirection: 'row',
    flexBasis: 56,
    padding: 15,
  },
  titulo: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'white',
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: "bold"
  }
});