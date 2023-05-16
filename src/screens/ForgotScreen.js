import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ForgotScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://api-crm.belsio.online:5001/api/v1/users/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Tenant': 'root',
          },
          body: JSON.stringify({ email: values.email }),
        });
        const data = await response.json();
        if (response.ok) {
          navigation.navigate('LoginScreen');
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
  });

  return (
    <View>
      <Image source={require('../image/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Forgot Your Password</Text>
      <Text style={styles.texttitel}>
        To reset Your Password, enter Your CRM username
      </Text>
      <TextInput
        style={[styles.emailbtn, formik.errors.email && styles.errorInput]}
        placeholder="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
      />
      <Text style={styles.errorText}>{formik.errors.email}</Text>
      <Text style={styles.errorText}>{error}</Text>
      <TouchableOpacity style={styles.continuebtn} onPress={formik.handleSubmit}>
        <Text style={styles.textcontinue}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelbtn} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.textcancel}>Cancel</Text>
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
    alignContent:"center",
    width: 90,
    height: 75,
    marginTop:100,
    marginLeft:130,
    marginRight:110,
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  texttitel: {
    alignItems: 'center',
    marginTop: 20,
    fontSize: 12,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
    alignContent: 'center',
  },
  emailbtn:{
    borderColor: '#ccc',
    borderRadius: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    marginLeft:30,
    marginRight:30,
    marginTop:20,
  },
  continuebtn:{
    marginLeft:210,
    backgroundColor:"#0090D8",
    height:40,
    width:120,
    borderRadius:5,
  },
  textcontinue:{
    color:"#FFF",
    flexDirection: "row",
    alignItems: "center",
    marginTop:10,
    marginLeft:30,
    fontWeight:'bold',
  },
  cancelbtn:{
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:40,
    width:120,
   borderColor:"#194D33",
   borderWidth:1,
   marginLeft:30,
   marginTop:-40,
  },
  textcancel:{
    color:"#0090D8",
    flexDirection: "row",
    alignItems: "center",
    fontWeight:'bold',
  },
  errorText: {
    color: 'red',
    marginLeft:30,
    marginBottom:10,
  },
});

export default ForgotScreen;
