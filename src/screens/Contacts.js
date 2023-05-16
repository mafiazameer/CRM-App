import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Contacts = ({ navigation }) => {
  const handleSearchClick = () => {
    navigation.navigate('FormScreen');
  };
  return (
    <View style={styles.container}>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop:60,
  },
});

export default Contacts;
