import React, { useEffect } from 'react';
import { View, Image,StyleSheet } from 'react-native';

const SpleshScreen = ({ navigation }) => {
  useEffect(() => {
 
    const splashTimeout = setTimeout(() => {
 
      navigation.navigate('LoginScreen');
    }, 2000);

  
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <View style={styles.container}>
    <Image source={require('../image/BelsioCRMlogo.png')} style={styles.logo} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    alignContent:"center",
    width: 180,
    height: 110,
    marginBottom:10,
    marginLeft:50,
    marginRight:50,
  },
});

export default SpleshScreen;
