import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import backimage from "../../assets/backimage.png";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ height: "70%" }}>
        <ImageBackground style={styles.BackgroundImage} source={backimage}>
          <Text
            style={{
              marginTop: "40%",
              fontWeight: "bold",
              fontSize: 70,
              color: "grey",
            }}
          >
            {" "}
            Find{" "}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            Quick and Safe
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 36,
              color: "grey",
            }}
          >
            JOP
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 36,
              color: "white",
            }}
          >
            In Your
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 36,
              color: "grey",
            }}
          >
            Area
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.Down}>
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate("SignUp", {
                name: "Alaa",
                email: "aaa@gmail.com",
              });
            }}
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

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Login")}
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
              Login{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  Down: {
    flex: 1,
    height: "30%",
    backgroundColor: "white",
    borderRadius: 1.5,
  },

  BackgroundImage: {
    width: "100%",
    height: "100%",
  },
  btn: {
    backgroundColor: "#faaa",
    width: "70%",
    borderRadius: 25,
    alignItems: "center",
  },
});

export default HomeScreen;
