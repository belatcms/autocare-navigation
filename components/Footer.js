import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Footer() {
  return (
    <View>
      <View style={styles.headline}>
        <View style={[styles.size, { backgroundColor: 'powderblue' }]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
   headline: {
     flexDirection: 'row',
     backgroundColor: 'steelblue',
     alignItems: 'flex-end',
     height: 100
  }
});

 