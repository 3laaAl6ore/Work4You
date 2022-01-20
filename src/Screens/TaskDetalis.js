import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const TasksDetalisScreen = (props) => {
  console.log(props);
  const defalutAPI = props.route.params.taskDList;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Discription}> {defalutAPI.TaskDiscription}</Text>
        <Text style={styles.TOwner}> {defalutAPI.TheTaskOwner}</Text>
      </View>
    </View>
  );
};

export const ScreenOptions = (Navdata) => {
  return {
    headerTitle: Navdata.route.params.taskDList.taskTitle,
    headerStyle: { backgroundColor: "#DFA11111" },
    headerTitleStyle: {
      color: "#000000",
    },
    headerTitleAlign: "center",
    headerLeftStyletitle: "center",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  taskTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 3,
  },
  Discription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  TOwner: {},
});
export default TasksDetalisScreen;
