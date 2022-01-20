import React,{useState} from 'react';
import {
   StyleSheet, 
   Text,
   View ,
  } from 'react-native';

const UserProfileScreen = (props)=> {
  return (
    <View style={styles.container}>
             <Text> user profile  </Text>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent:'center'

  }});
export default UserProfileScreen;
