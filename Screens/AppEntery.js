import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./Home";
import LoginScreen from "./Login";
import indexScreen from "./index";

const Tab = createBottomTabNavigator();
const AppEnteryScreen = (props)=> {

  return (
    <Tab.Navigator>
    <Tab.Screen 
    name="index" 
    component={indexScreen} 
    options = {{
      header :()=> null,}}

    />
    <Tab.Screen name="Login" component={LoginScreen} />

  </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent:'center'

  }
});
export default AppEnteryScreen;
