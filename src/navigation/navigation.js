// 1
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//2
import HomeScreen from "../Screens/Home";
import LoginScreen from "../components/keyloger/Login";
import SignUpScreen from "../components/keyloger/SignUp";
import AppEnteryScreen from "../Screens/AppEntery";
import TasksDetalisScreen, {
  ScreenOptions as TasksDetalisScreenOptions,
} from "../Screens/TaskDetalis";

//3

const Stacknavigator = createStackNavigator();
export const Nav = () => {
  return (
    <Stacknavigator.Navigator initialRouteName="Home">
      <Stacknavigator.Screen
        name="TaskDetalis"
        component={TasksDetalisScreen}
        options={TasksDetalisScreenOptions}
      />

      <Stacknavigator.Screen
        name="AppEntery"
        component={AppEnteryScreen}
        options={{
          header: () => null,
        }}
      />
      <Stacknavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => null,
        }}
      />

      <Stacknavigator.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: "Sign Up",
          headerBackTitle: "back",
        }}
      />

      <Stacknavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
    </Stacknavigator.Navigator>
  );
};
