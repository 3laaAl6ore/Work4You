import React,{useState} from 'react';
import {
   StyleSheet, 
   Text,
   View ,
   TextInput,
   TouchableOpacity,
  ActivityIndicator
  } from 'react-native';

const LoginScreen = (props)=> {

  const [Username, setUsername] = useState('');
  const [Password , setPassword] = useState('');
  const [isLoding , setIsLoding] = useState(false);

  const VerificationAccount =()=>{

    setIsLoding(true);
    setTimeout( ()=>{
      props.navigation.navigate('AppEntery');
      setIsLoding(false);
    },2000);
  }
  return (
    <View style={styles.container}>
               <TextInput style={styles.TextInput}
            placeholder='Username'
            value = {Username}
            onChangeText={(text) =>setUsername(text)}

          />
          <TextInput style={styles.TextInput}
            placeholder='Password'
              secureTextEntry
          />

        {
          isLoding ? (

            <ActivityIndicator size="large" color="#ffcc00" />
           
            ):(
                
          <TouchableOpacity style={styles.Login} 
          onPress={VerificationAccount}  >
            <Text style={{
              fontSize:20,
              fontWeight:'bold', 
              textAlign: 'center'
            }}> 
            Login </Text>
            </TouchableOpacity>
          )

        }

       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent:'center'

  },
  TextInput:{
    backgroundColor: '#ffffff',
    width:'65%',
    marginVertical:10,
    paddingVertical:10,
    fontSize:20,
    borderRadius:25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Login: {
    width: "30%",
    borderRadius: 25,
    paddingVertical: 13,
    backgroundColor: 'white',
  }
});
export default LoginScreen;
