import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import TaskCard from '../components/TaskCard';
import TaskCardGrey from '../components/TaskCardGrey';
import TaskListItem from '../components/TaskListItem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

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
  const [enteredText, setEnteredText] = useState();
  const [tasks, setTasks] = useState([]);

  const Tab = createBottomTabNavigator();

  function taskInputHandler(enteredText: string) {
    setEnteredText(enteredText);
  } //this func is for fetching user input as user types

  function addInputHandler() {
    setTasks(currentTasks => [...currentTasks,
      {text: enteredText, id: Math.random().toString()}]);
  } //this would be fired when the add button is clicked

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topTextContainer}>
          <Text style={styles.userGreet}>Hey Jerri</Text>
          <Text style={styles.title}>Lets create your task lists...</Text>
          <View style={styles.avi}></View>
        </View>

        <View style={styles.search}>
          <TextInput
            onChangeText={taskInputHandler}
            style={styles.input}
            placeholder="Add new task"
          />
          <TouchableOpacity onPress={addInputHandler}>
            <Ionicons style={styles.add} name="add" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.projects}>
        <View style={styles.projectText}>
          <Text style={styles.projectTitle}>Project</Text>
          <Text style={styles.projectCategory}>All Tasks</Text>
        </View>

        <View style={styles.TaskContainer}>
          {/* <FlatList
            horizontal={true}
            data={tasks}
            keyExtractor={task => task.id.toString()}
            renderItem={({ item }) => {
              console.log(item);
              return <TaskCard title="Here say" />;
            }}
          /> */}
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          {/* //Mapping Manually */}
          {/* {tasks.map(task => (
              <TouchableOpacity>
                <View style={styles.mapView}>
                  <Text style={styles.taskText} key={task}>{task}</Text>
                </View>
              </TouchableOpacity>
            ))} */}
          {/* </ScrollView> */}
          <FlatList
          
            data={tasks}
            renderItem={(itemData) => (
              <View style={styles.mapView}>
              <Text style={styles.taskText}>
                {itemData.item.text}
              </Text>
            </View>
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>

        <View style={styles.taskField}>
          <View style={styles.taskRow}>
            <Text style={styles.taskTitle}>Tasks</Text>
            <Text>View All</Text>
          </View>
        </View>
      </View>
      <View style={styles.taskLists}>
        <ScrollView
          style={{ height: '100%', width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <TaskListItem taskList="Entry for new projects and..." />
          <TaskListItem taskList="Start brand development for new client" />
        </ScrollView>
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
  search: {
    height: 40,
    borderRadius: 10,
    width: '80%',
    backgroundColor: 'white',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.4,
  },
  add: {
    right: 10,
  },

  input: {
    fontSize: 12,
    paddingLeft: 15,
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
  mapView: {
    height: 60,
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  taskText: {
    color: 'white',
  },
});
