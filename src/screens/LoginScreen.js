import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';


const loginfromApi = async (email, password, navigation) => {
  
  console.log('Fetch Api Cal');

  const token = await AsyncStorage.getItem('userToken');
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Tenant': 'root',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  };
  fetch("http://api-crm.belsio.online:5001/api/v1/tokens", requestOptions)
  .then((response) => response.json())
  .then((json) => {
    console.log('Fetch API Response', json);
    AsyncStorage.setItem('userToken', json.token)
      .then(() => {
        const name = json.fullName;
        console.log(name)
        navigation.navigate('HomeScreen',{name});
      })
      .catch((error) => {
        console.error('AsyncStorage Error', error);
      });
  })
}
export default function LoginScreen({ navigation }) {

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };
  
  const handleForgot = () => {
    navigation.navigate('ForgotScreen');
  };
  return(
    <View style={styles.container}>
      <Image source={require('../image/BelsioCRMlogo.png')} style={styles.logo} />
      <Text style={styles.textstyle}> Welcome back</Text>
      <Text style={styles.texttitel}> Continue with google enter your details</Text>
      <TouchableOpacity style={styles.googlebutton}>
        <Image source={require('../image/google.png')} style={styles.googleicon} />
        <Text style={{ fontSize: 12 }}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Appleebutton}>
        <Image source={require('../image/apple.png')} style={styles.Appleleicon} />
        <Text style={{ fontSize: 12 }}>Login with Apple</Text></TouchableOpacity>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Enter a Email'),
          password: Yup.string().required('Enter a Password')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            loginfromApi(values.email, values.password, navigation);
            setSubmitting(false);
          }, 400);
        }}
      >
        {formik => (
          <View style={{margin: 10, marginTop:20, padding:20, marginHorizontal: 16}}>
            <TextInput
               style={[styles.input]}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <Text style={{ color: 'red',marginTop:-20,marginLeft:-30 }}>{formik.errors.email}</Text>
            ) : null}
            <TextInput
              style={[styles.input]}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              value={formik.values.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleForgot}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            {formik.touched.password && formik.errors.password ? (

              <Text style={{ color: 'red',marginLeft:-30,marginTop:-60 ,marginBottom:50}}>{formik.errors.password}</Text>
            ) : null}
           <TouchableOpacity 
           style={{ 
            backgroundColor: '#0090D8',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 30,
            width:300,
            marginLeft:-15,
            marginRight:10,
           
         }}
  activeOpacity={0.8}
  onPress={formik.handleSubmit}
>
  <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
</TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Don't have account?Signup up for free</Text>
        </TouchableOpacity>
    </View>
  );
}
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
    marginTop:50,
    marginLeft:120,
    marginRight:120,
    alignItems: 'center',
  },
  textstyle:{
    fontSize:16,
    marginLeft:100,
    marginRight:100,
    flexDirection: "row",
    alignItems: "center",
    fontWeight:'bold',
    marginTop:10,
  },
  texttitel:{
    marginLeft:40,
    marginRight:30,
    flexDirection: "row",
    alignItems: "center",
    marginTop:20,
    marginBottom:10,
  },
  forgotPassword:{
    marginLeft:180,
    marginTop:10,
    fontSize:12,
    marginBottom:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#000000',
    borderRadius: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    width:330,
    marginLeft:-30,
    marginRight:-10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#004A9A',
    borderRadius: 1,
  },
  rememberMeLabel: {
    fontSize: 16,
    marginTop:20,
  },
  loginButton: {
    backgroundColor: '#0090D8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    width:350,
    
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#004A9A',
    fontSize: 12,
    textDecorationLine: 'underline',
  },errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  googlebutton:{
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5, 
    marginBottom: 10, 
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderWidth:1,
    height:40,
    width:150,
    marginLeft:10,
  },
  googleicon:{
    height:12,
    width:10,
    marginRight:5,
  },
  Appleebutton:{
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5, 
    marginBottom: 10, 
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 10,
    alignItems: 'center',
    borderWidth:1,
    height:40,
    width:150,
    marginLeft:190,
    marginTop:-50,
    marginRight:10,
  },
  Appleleicon:{
    height:12,
    width:10,
    marginRight:5,
  },
  buttonText:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
  },
});





