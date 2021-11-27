import React ,{useState}from 'react';
import { StyleSheet , View ,FlatList,Text} from 'react-native';


const indexScreen =()=>{

const fakeTaskData= [
  {
    id: '1',
    taskTitle: 'I need a driver ...1',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...1',
  },
  {
    id: '2',
    taskTitle: 'I need a driver...2',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...2',
  },
  {
    id: '3',
    taskTitle: 'I need a driver...3',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...3',
  },
  {
    id: '4',
    taskTitle: 'I need a driver...4',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...4',
  },
  {
    id: '5',
    taskTitle: 'I need a driver ...5',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...5',
  },
  {
    id: '6',
    taskTitle: 'I need a driver...6',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...6',
  },
  {
    id: '7',
    taskTitle: 'I need a driver...7',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...7',
  },
  {
    id: '8',
    taskTitle: 'I need a driver...8',
    TheTaskOwner: 'Alaa',
    WhenTheTaskAded:'1:20',
    TaskDiscription: 'i need a driver to take me home...8',
  }
  

];

return (
  <View style={styles.container}>
    <FlatList
      style={{ width: "100%" }}
      data={fakeTaskData}
      keyExtractor={(item) => item.id}
      renderItem={(taskItem) => (
          //<TouchableOpacity onPress={()=>{ props.navigation.navigate('Products' ,{ productsList: categoryItem.item})}}>
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

  

          <Text style={styles.TheTaskOwner}> {taskItem.item.TheTaskOwner}  {taskItem.item.WhenTheTaskAded}</Text>
        <Text style={styles.TaskDiscription}> {taskItem.item.TaskDiscription}</Text>
  
           </View>
        //</TouchableOpacity>
      )}
    />
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00cc99",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  taskTitle: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 20,
  },
  TheTaskOwner:{
    color: 'black',
    fontWeight: '100',
    fontSize: 16,
  },
  TaskDiscription:{
    color: 'black',
    fontWeight: '400',
    fontSize: 17,
  }
});
export default indexScreen;