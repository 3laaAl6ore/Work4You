import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import UserTasksScreen from "./UserTasks";
import indexScreen from "./index";
import UserProfileScreen from "./UserProfile";

const Tab = createBottomTabNavigator();
export const AppEnteryScreen = (props) => {
  //console.log("the data: ", props);

  const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
      case "index":
        iconName = "home";
        break;
      case "UserTasks":
        iconName = "appstore-o";
        break;
      case "UserProfile":
        iconName = "user";
        break;
      default:
        break;
    }
    return <Icon name={iconName} color={color} size={24} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        shifing: true,
      })}
    >
      <Tab.Screen
        name="index"
        component={indexScreen}
        options={({ header: () => null }, { title: () => null })}
      />
      <Tab.Screen
        name="UserTasks"
        component={UserTasksScreen}
        options={({ header: () => null }, { title: () => null })}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={({ header: () => null }, { title: () => null })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AppEnteryScreen;
