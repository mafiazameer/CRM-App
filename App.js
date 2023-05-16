import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import SplashScreen from './src/screens/SpleshScreen';
import AppNavigator from './src/navigation/AppNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import ResetPassword from './src/screens/ResetPassword';
import HomeScreen from './src/screens/HomeScreen';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Contacts from './src/screens/Contacts';
import FormScreen from './src/screens/FormScreen';

export default function App() {
  return (
   <NavigationContainer>
    <AppNavigator/>
   </NavigationContainer>
  );
}