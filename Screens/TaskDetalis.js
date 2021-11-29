import React,{useState} from 'react';
import {
   StyleSheet, 
   Text,
   View ,
   FlatList,
   SafeAreaView
  } from 'react-native';

const TasksDetalisScreen = (props)=> {
  console.log(props.route.params.taskDList.TheTaskOwner);
 // console.log(props);
  return (
    <SafeAreaView style={styles.container}>
     {/** <Text> {props.route.params.taskDList.TheTaskOwner}</Text> */}
      <FlatList
        style={{ width: "100%" }}
        data={props.route.params.taskDList}
        keyExtractor={(item) => item.id}
        renderItem={(taskDItem) => (
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              padding: 16,
              marginBottom: 10,
              borderRadius: 15,
            }}
          >
              <Text style={styles.taskTitle}> {taskDItem.item.TheTaskOwner} </Text>
          </View>
        )}
      />
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent:'center'

  },
  taskTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },

});
export default TasksDetalisScreen;
