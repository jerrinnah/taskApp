import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Button, Input } from "react-native-elements";
import { useState } from "react";

const AddTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function taskInputHandler(enteredText: any) {
    setEnteredTask(enteredText);
  }

  function addTaskInputHandler() {
    setTasks((currentTasks) => [...currentTasks, enteredTask]);
  }

  return (
    <View style={styles.container}>
      <Text>Add Task</Text>
      <View style={styles.textInput}>
        <Input
          placeholder="Add Task"
          autoCompleteType={undefined}
          onChangeText={taskInputHandler}
        />
        <Button
          style={styles.btn}
          title={"Add Task"}
          onPress={addTaskInputHandler}
        />
      </View>

      <View style={styles.listTasks}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>List of Tasks</Text>
        <View style={styles.listContainer}>
          <FlatList
            style={{width:'100%', height:'100%'}}
            data={tasks}
            renderItem={(itemData) => {
              return (
                <View>
                  <ScrollView style={{height:'80%',}}>
                    <TouchableOpacity>
                      <Text style={styles.listText}>- {itemData.item}</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    top: 30,
    right: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 3,
    width: "70%",
    marginRight: 10,
  },
  btn: {
    marginRight: 50,
    // color:'black'
  },
  listTasks: {
    top: 30,
    right: 10,
    left: 10,
    // backgroundColor:'black'
  },
  listContainer: {
    width: "100%",
    height: "85%",
    // justifyContent:'center',
    // padding:15,
    marginTop: 30,
    // marginBottom: 10,
    // backgroundColor:'red'
  },

  listText: {
    top: 40,
    height: 40,
    width: "90%",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "300",
    backgroundColor: "green",
    // marginBottom: 10,
    color: "white",
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  // listItem: {
  //   height:30,
  //   width:'50%',
  //   backgroundColor: "blue",
  //   color: "white",
  //   padding: 5,
  //   marginBottom:5,
    // fontSize: 14,
    // marginBottom: ,
  // },
});
