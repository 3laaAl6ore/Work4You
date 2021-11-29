import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";

const SignUpScreen = (props) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassward] = useState("");
  const [ConformPassword, setConformPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  const [isLoding, setIsLoding] = useState(false);

  // Register Function
  const RegisterAccount = async () => {
    setIsLoding(true);
    setTimeout(() => {
      setIsLoding(false);
      props.navigation.navigate("AppEntery", { UserName });
    }, 2000);
  };
  return (
    <KeyboardAvoidingView behavior={"padding"}
    style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        value={UserName}
        onChangeText={(text) => setUserName(text)}
      />
      {/*<Text>{props.route.params.name}</Text>*/}

      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        value={Password}
        onChangeText={(text) => setPassward(text)}
      />
      {/*    <Text>{props.route.params.email}</Text>*/}

      <TextInput
        style={styles.TextInput}
        placeholder="Conform Password"
        secureTextEntry
        value={ConformPassword}
        onChangeText={(text) => setConformPassword(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Phone Number"
        value={Phone}
        // multiline enabled
        onChangeText={(text) => setPhone(text)}
      />

      {isLoding ? (
        <ActivityIndicator size="large" color="#ffcc00" />
      ) : (
        <TouchableOpacity style={styles.Register} onPress={RegisterAccount}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 20,
            }}
          >
            register
          </Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
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
  Register: {
    width: "30%",
    borderRadius: 25,
    paddingVertical: 13,
    backgroundColor: "white",
  },
});
export default SignUpScreen;
