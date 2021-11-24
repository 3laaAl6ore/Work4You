import React ,{useState}from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Nav} from './navigation';


export default function App() {

  return (
    <NavigationContainer>
      <Nav/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',

  }
  
});
