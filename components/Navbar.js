import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Nav() {
  return (
    <View>
      <View style={styles.headline}>
        <Image source={require('../assets/images/logo.png')} />
        <Text style={styles.titulo}>Newton Paiva</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
   headline: {
     display: 'flex',
     flexDirection: 'row',
     backgroundColor: '#043D5D',
    alignItems: 'center'
  },
  titulo: {
    textAlign: 'center',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white'
  }
});

 