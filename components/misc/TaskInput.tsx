import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

const TaskInput = props => {
  const [enteredText, setEnteredText] = useState();

  function taskInputHandler(enteredText: string) {
    setEnteredText(enteredText);
  } //this func is for fetching user input as user types

  function addInputHandler() {
    props.addInput(enteredText);
    setEnteredText('');
  }

  return (
    
    // <Modal>
    <View style={styles.search}>
      <TextInput
        onChangeText={taskInputHandler}
        style={styles.input}
        placeholder="Add new task"
        value={enteredText}
      />
      <TouchableOpacity onPress={addInputHandler}>
        <Ionicons style={styles.add} name="add" size={25} />
      </TouchableOpacity>
      </View>
      // </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
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
});
