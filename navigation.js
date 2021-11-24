// 1
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//2
import HomeScreen from "./Screens/Home";
import LoginScreen from "./Screens/Login";
import SignUpScreen from "./Screens/SignUp";
import AppEnteryScreen from "./Screens/AppEntery";

//3
const Stacknavigator = createStackNavigator();
export const Nav = () => {
  return (
    <Stacknavigator.Navigator>
      <Stacknavigator.Screen name="AppEntery" component={AppEnteryScreen} />
      <Stacknavigator.Screen name="Home" component={HomeScreen} />
      <Stacknavigator.Screen name="SignUp" component={SignUpScreen} />
      <Stacknavigator.Screen name="Login" component={LoginScreen} />
    </Stacknavigator.Navigator>
  );
};
