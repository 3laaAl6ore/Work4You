import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <Text style={styles.Welcome}>Welcome To Work4You</Text>
      </View>
      <View style={styles.Down}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              paddingVertical: "2%",
              fontWeight: "bold",
              fontSize: 19,
            }}
          >
            {" "}
            New Here ?{" "}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#faaa",
              width: "50%",
              borderRadius: 25,
            }}
            onPress={() => {props.navigation.navigate('SignUp' , {name:'Alaa' , email:'aaa@gmail.com'})}}
          >
            <Text
              style={{
                textAlign: "center",
                paddingVertical: "5%",
                fontWeight: "bold",
                fontSize: 19,
              }}
            >
              {" "}
              Sign Up{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", paddingVertical: "8%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#faaa",
              width: "50%",
              borderRadius: 25,
            }}
            onPress={() =>props.navigation.navigate('Login') }
          >
            <Text
              style={{
                textAlign: "center",
                paddingVertical: "5%",
                fontWeight: "bold",
                fontSize: 19,
              }}
            >
              {" "}
              Logn In{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  Top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Down: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 1.5,
  },

  Welcome: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: "50%",
  },
});
