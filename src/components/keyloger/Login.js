import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { authentication } from "../../../Fire_base/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginScreen = (props) => {
  const [Username, setUsername] = useState("bbbbb@gmail.com");
  const [Password, setPassword] = useState("123123123");
  const [isLoding, setIsLoding] = useState(false);

  const LogIn = () => {
    signInWithEmailAndPassword(authentication, Username, Password)
      .then((result) => {
        //console.log(result);
        props.navigation.navigate("AppEntery", { userData: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        value={Username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        value={Password}
        onChangeText={(text) => setPassword(text)}
      />

      {isLoding ? (
        <ActivityIndicator size="large" color="#ffcc00" />
      ) : (
        <TouchableOpacity style={styles.Login} onPress={LogIn}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Login{" "}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    backgroundColor: "#ffffff",
    width: "65%",
    marginVertical: 10,
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  Login: {
    width: "30%",
    borderRadius: 25,
    paddingVertical: 13,
    backgroundColor: "white",
  },
});
export default LoginScreen;
