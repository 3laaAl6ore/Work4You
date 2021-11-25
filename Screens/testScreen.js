import React,{useState} from 'react';
import {
    StyleSheet, 
    Text,
    View ,
    ImageBackground,
    SafeAreaView
   } from 'react-native';
   import backimage from '../assets/backimage.png';

   const testScreen =()=> {
       return(
           <SafeAreaView style={styles.container}>

               
                <ImageBackground style={styles.BackgroundImage} source={backimage}>
                    <Text style={styles.title}>Complete your prjects online easliy and safety</Text>
                    
                </ImageBackground>
                

            </SafeAreaView>
       )
   }

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
  
    },
    BackgroundImage: {
        width:'100%',
         height:'100%',

    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        fontWeight:'bold',
        marginTop:'60%',
        fontSize:40,
        color:'white',
        

    }
})
    export default testScreen;