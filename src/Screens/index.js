import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import RNPicker from "react-native-picker-select";

const indexScreen = (props) => {
  const fakeTaskData = [
    {
      id: "1",
      taskTitle: "I need a driver ...1",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...1",
      price: 15,
      Kind: "desin",
    },
    {
      id: "2",
      taskTitle: "I need a driver...2",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...2",
      price: 25,
      Kind: "programming",
    },
    {
      id: "3",
      taskTitle: "I need a driver...3",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...3",
      price: 42,
      Kind: "markting",
    },
    {
      id: "4",
      taskTitle: "I need a driver...4",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...4",
      price: 65,
      Kind: "learning",
    },
    {
      id: "5",
      taskTitle: "I need a driver ...5",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...5",
      price: 22,
      Kind: "oper",
    },
    {
      id: "6",
      taskTitle: "I need a driver...6",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...6",
      price: 23,
      Kind: "cocking",
    },
    {
      id: "7",
      taskTitle: "I need a driver...7",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...7",
      price: 52,
      Kind: "desin",
    },
    {
      id: "8",
      taskTitle: "I need a driver...8",
      TheTaskOwner: "Alaa",
      WhenTheTaskAded: "1:20",
      TaskDiscription: "i need a driver to take me home...8",
      price: 6,
      Kind: "desin",
    },
  ];
  const [searchStr, setSearchStr] = useState("");
  const [subData, setSubData] = useState([]);
  const [TaskTypesValue, setTaskTypesValue] = useState("All");
  const getResults = async () => {
    setSubData([]);
    if (searchStr != "") {
      try {
        setSubData(fakeTaskData.filter((sub) => sub.Kind == TaskTypesValue));
        console.log(subData);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      // Alert.alert(searchStr);
      console.log("realy!!");
    }
  };
  const musicTypes = [
    { label: "All", value: "all" },
    { label: "Desin", value: "desin" },
    { label: "Cocking", value: "cocking" },
    { label: "Programming", value: "programming" },
    { label: "oper", value: "oper" },
    { label: "Learning", value: "learning" },
    { label: "markting", value: "markting" },
    { label: "Tv Show", value: "tvShow" },
    { label: "E-Book", value: "ebook" },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          //marginTop: 15,
          //paddingBottom: 6,
          //paddingLeft: 6,
          //borderBottomWidth: 0.25,
          borderBottomColor: "#CCFF",
          alignContent: "center",
        }}
      >
        <Icon name="ios-search" color="black" size={30} />
        <TextInput
          //  placeholder="Search..."
          // placeholderTextColor="skyblue"
          style={{
            width: "50%",
            fontWeight: "bold",
            borderRadius: 3,
            borderWidth: 0.12,
            borderBottomColor: "#CCFF",
            borderBottomWidth: 1.9,
          }}
          onChangeText={(text) => setSearchStr(text)}
        />
        <TouchableOpacity
          onPress={getResults}
          style={{
            backgroundColor: "#CCFF",
            width: "20%",
          }}
        >
          <Text
            style={{
              marginTop: 6,
              marginLeft: 10,
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: "23%",
            paddingLeft: 26,
            backgroundColor: "#DDC",
          }}
        >
          <RNPicker
            style={{
              width: 90,
              backgroundColor: "#CA1",
              fontSize: 17,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 8,
              color: "black",
              marginLeft: 5,
            }}
            items={musicTypes}
            onValueChange={(val) => setTaskTypesValue(val)}
          />
        </View>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={subData.length > 0 ? subData : fakeTaskData}
        keyExtractor={(item) => item.id}
        renderItem={(taskItem) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("TaskDetalis", {
                taskDList: taskItem.item,
              });
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: 9,
                borderRadius: 15,
              }}
            >
              <Text style={styles.taskTitle}> {taskItem.item.taskTitle} </Text>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.InlineInfo}>
                  <Icon name="person" color="black" size={12} />{" "}
                  {taskItem.item.TheTaskOwner}
                </Text>
                <Text style={styles.InlineInfo}>
                  <Icon name="alarm-sharp" color="black" size={12} />{" "}
                  {taskItem.item.WhenTheTaskAded}
                </Text>
                <Text style={styles.InlineInfo}>${taskItem.item.price}</Text>
              </View>

              <Text style={styles.TaskDiscription}>
                {" "}
                {taskItem.item.TaskDiscription}
              </Text>
              <View
                style={{ width: "100%", backgroundColor: "#D5CDCD", height: 1 }}
              ></View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  taskTitle: {
    color: "#3746D1",
    fontWeight: "bold",
    fontSize: 20,
  },
  InlineInfo: {
    color: "grey",
    fontWeight: "100",
    fontSize: 16,
    marginLeft: 12,
  },
  TaskDiscription: {
    color: "black",
    fontWeight: "600",
    fontSize: 17,
  },
});
export default indexScreen;
