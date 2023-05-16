import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textss}>Hello</Text>
  
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5',
    padding: 20,
  },
  textss:{
    fontSize:20,
    marginTop:100,
    marginLeft:50,
  }
});

export default Details;
