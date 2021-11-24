import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

const SignUpScreen = (props)=> {

  return (
    <View style={styles.container}>
          <TextInput style={styles.TextInput}
            placeholder='Username'

          />
          {/*<Text>{props.route.params.name}</Text>*/ }

          <TextInput style={styles.TextInput}

            placeholder='Password'
              secureTextEntry
          />
      {/*    <Text>{props.route.params.email}</Text>*/}

          <TextInput style={styles.TextInput}
          placeholder='Conform Password'
          secureTextEntry
          />
          <TextInput style={styles.TextInput}
            placeholder='Email'

          />
          <TextInput style={styles.TextInput}
          placeholder='Phone Number'
          />
        <TouchableOpacity  style={{width:'30%',borderRadius:25,paddingVertical :10,backgroundColor:'white'}}>
          <Text style={{textAlign:'center',fontWeight:'bold' }}>register</Text>
          </TouchableOpacity>
       </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
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
    
    
  }
});
export default SignUpScreen;