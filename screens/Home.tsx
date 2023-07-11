import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import TaskCard from '../components/TaskCard';
import TaskCardGrey from '../components/TaskCardGrey';
import TaskListItem from '../components/TaskListItem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';
import NoteInput from '../components/misc/NoteInput';
import { Button } from 'react-native-elements/dist/buttons/Button';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/misc/TaskInput';

const tasks = [
  {
    id: 1,
    title: 'Get web screens ready',
    taskInfo: 'Work on the rest of the screens for the presentation',
  },
  {
    id: 2,
    title: 'Remind the Team',
    taskInfo: 'Work on the rest of the screens for the presentation',
  },
  {
    id: 3,
    title: 'Date with Bae',
    taskInfo: 'Confirm reservation and get ready for the dinner date',
  },
];

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
 
  const Tab = createBottomTabNavigator();

  function addInputHandler(enteredText) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: enteredText, id: Math.random().toString()},
    ]);
  } //this would be fired when the add task button is clicked

  function addNoteToList() {
    setNotes(currentNotes => [
      ...currentNotes,
      { text: enteredNote, id: Math.random().toString() },
    ]);
    // console.log(enteredNote)
  }

  function deleteTaskHandler(id: any) {
    setTasks(currentTasks => {
      return currentTasks.filter((task)=> task.id !== id);
    });
    // console.log("Deleted")
  }
 
 

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topTextContainer}>
          <Text style={styles.userGreet}>Hey Jerri</Text>
          <Text style={styles.title}>Lets create your task lists...</Text>
          <View style={styles.avi}></View>
        </View>
        {/* <Button  title="Add New Task" /> */}
        <TaskInput addInput={addInputHandler} />
      </View>

      <View style={styles.projects}>
        <View style={styles.projectText}>
          <Text style={styles.projectTitle}>Task Lists</Text>
          <Text style={styles.projectCategory}>All Tasks</Text>
        </View>

        <View style={styles.TaskContainer}>
         
          <FlatList
            data={tasks}
            renderItem={(itemData) => {
              return (
                <TaskItem text={itemData.item.text} />
              );
            }}
              
           
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>

        <View style={styles.taskLists}>
          <FlatList
            data={notes}
            renderItem={itemData => {
              return <Text>{itemData.item.text}</Text>;
            }}
          />
        </View>
      </View>
     
  
      <View style={styles.noteContainer}>
           {/* <NoteInput /> */}
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  top: {
    height: 170,
    width: 350,
    backgroundColor: 'black',
    borderRadius: 30,
    bottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTextContainer: {
    top: 30,
    padding: 20,
    width: '57%',
    right: 80,
    justifyContent: 'center',
  },
  userGreet: {
    fontSize: 13,
    color: 'white',
    bottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avi: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    top: 30,
    left: 280,
    position: 'absolute',
  },

  projects: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    // backgroundColor:'grey',
  },
  projectText: {
    padding: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  projectTitle: {
    fontSize: 25,
    fontWeight: '300',
    color: 'black',
  },
  projectCategory: {
    fontSize: 12,
    top: 10,
  },
  TaskContainer: {
    height: '80%',
    width: '95%',
    padding: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskField: {
    height: '100%',
    width: '100%',
    // backgroundColor:'blue'
  },
  taskRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor:'green',
    padding: 20,
    alignItems: 'center',
  },

  taskTitle: {
    fontSize: 30,
    fontWeight: '300',
  },
  taskLists: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    top: 90,
    paddingLeft: 20,
    paddingRight: 20,
  },
 
  noteTitle: {
    flexDirection: 'row',
  },
  noteContainer: {
    height: 100,
    width: '100%',
    // padding:20,
    // backgroundColor: 'red',

  }
});
