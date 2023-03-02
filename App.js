import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.titleText}>Helpful Neighbor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0d2eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
