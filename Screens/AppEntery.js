import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

const AppEnteryScreen = (props)=> {

  return (
    <View style={styles.container}>
        <Text> Welcome</Text>
       </View>
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
