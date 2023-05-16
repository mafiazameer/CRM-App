import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import SpleshScreen from "../screens/SpleshScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotScreen from "../screens/ForgotScreen";
import ResetPassword from "../screens/ResetPassword";
import HomeScreen from "../screens/HomeScreen";
import Details from "../screens/Details";
import Home from "../screens/Home";
import { Form } from "formik";
import Contacts from "../screens/Contacts";
import FormScreen from "../screens/FormScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#004A9A',
          height:100,
          width:'100%',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="SpleshScreen" component={SpleshScreen}options={{ headerShown: false }} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen}options={{ headerShown: false }}/> 
      <Stack.Screen name="SignupScreen" component={SignupScreen}options={{ headerShown: false }}/> 
      <Stack.Screen name="ForgotScreen" component={ForgotScreen}options={{ headerShown: false }}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword}options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}options={{ headerShown: false }} /> 
    </Stack.Navigator>
  )
}

export default AppNavigator;
