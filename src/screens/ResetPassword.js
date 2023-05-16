import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RestPassword = ({ navigation }) => {

  return (
    <View>
      <Image source={require('../image/logo.png')} style={styles.logo} />

      <Text style={styles.heading}> Reset Password confirmation,</Text>
      <Text style={styles.texttitel}> Your password has been reset.</Text>

      <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Loginscreen')}>
        <Text style={styles.textlogout} >Please click here to login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 80,
    marginTop: 80,
    marginLeft: 130,
    marginRight: 100,
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 60,
    marginRight:60,
  },
  texttitel: {
    alignItems: 'center',
    marginTop: 20,
    fontSize: 12,
    marginLeft: 20,
    marginRight: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textlogout:{
    color:"#0090D8",
    marginLeft:190,
    marginTop:-18,
  }

  
});

export default RestPassword;
