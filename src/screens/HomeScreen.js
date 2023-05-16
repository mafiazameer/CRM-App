import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Contacts from './Contacts';
import Account from './Account';
import Home from './Home';
import Details from './Details';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>{name}!</Text>
  
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#00008B',
            inactiveTintColor: '#757575',
            labelStyle: {
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 5,
            },
            style: {
              backgroundColor: '#fff',
              borderTopWidth: 1,
              borderTopColor: '#f2f2f2',
              paddingBottom: 5,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon
                  name="home"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contacts}
            options={{
              tabBarLabel: 'Contact',
              tabBarIcon: ({ color, size }) => (
                <Icon
                  name="address-book"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color, size }) => (
                <Icon
                  name="user"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={Details}
            options={{
              tabBarLabel: 'Details',
              tabBarIcon: ({ color, size }) => (
                <Icon
                  name="list-alt"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  textstyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 230,
  },
});

export default HomeScreen;
