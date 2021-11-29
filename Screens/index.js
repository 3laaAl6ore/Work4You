import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';

const indexScreen = (props) => {
  const fakeTaskData = [
    {
      id: "1",
      taskTitle: "I need a driver ...1",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...1",
      price: 15,
    },
    {
      id: "2",
      taskTitle: "I need a driver...2",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...2",
      price: 25,
    },
    {
      id: "3",
      taskTitle: "I need a driver...3",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...3",
      price: 42,
    },
    {
      id: "4",
      taskTitle: "I need a driver...4",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...4",
      price: 65,
    },
    {
      id: "5",
      taskTitle: "I need a driver ...5",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...5",
      price: 22,
    },
    {
      id: "6",
      taskTitle: "I need a driver...6",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...6",
      price: 23,
    },
    {
      id: "7",
      taskTitle: "I need a driver...7",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...7",
      price: 52,
    },
    {
      id: "8",
      taskTitle: "I need a driver...8",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...8",
      price: 6,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />

      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        {" "}
        Last Tasks In Your Area{" "}
      </Text>
      <View style={{ width: "100%",flexDirection: "row", marginTop: 15 }}>
        <Icon name="ios-search" color="black" size={30} />
        <TextInput 
         placeholder="Search"
          placeholderTextColor = 'skyblue'  
         />
      </View>

      <FlatList
        style={{ width: "100%" }}
        data={fakeTaskData}
        keyExtractor={(item) => item.id}
        renderItem={(taskItem) => (
          <TouchableOpacity onPress={()=>{ props.navigation.navigate('TaskDetalis' ,{ taskDList: taskItem.item})}}>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              padding: 16,
              marginBottom: 10,
              borderRadius: 15,
            }}
          >
            <Text style={styles.taskTitle}> {taskItem.item.taskTitle} </Text>
            <Text style={styles.TheTaskOwner}>
              {" "}
              {taskItem.item.TheTaskOwner} {taskItem.item.WhenTheTaskAded}{" "}
              {taskItem.item.price}$
            </Text>
            <Text style={styles.TaskDiscription}>
              {" "}
              {taskItem.item.TaskDiscription}
            </Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  taskTitle: {
    color: "#3746D1",
    fontWeight: "bold",
    fontSize: 20,
  },
  TheTaskOwner: {
    color: "black",
    fontWeight: "100",
    fontSize: 16,
  },
  TaskDiscription: {
    color: "black",
    fontWeight: "400",
    fontSize: 17,
  },
});
export default indexScreen;
