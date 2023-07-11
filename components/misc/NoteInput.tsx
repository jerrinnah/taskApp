import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

const NoteInput = (props) => {
  const [enteredNote, setEnteredNote] = useState();
 

  function addNoteInput(enteredNote) {
    setEnteredNote(enteredNote);
    // setEnteredNote('')
    // console.log(enteredNote)
  }

//   function addNoteToList() {
//     setNotes(currentNotes => [
//       ...currentNotes,
//       { text: enteredNote, key: Math.random().toString() },
//     ]);
//        setEnteredNote('')
//     // console.log(enteredNote)
//   }
    function addNoteHandler(){
        props.addNoteInput(enteredNote);
        // setEnteredNote('')
    }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskField}>
          <View style={styles.taskRow}>
            <View style={styles.noteTitle}>
              <Text style={styles.taskTitle}>Notes</Text>
              <TouchableOpacity onPress={addNoteHandler}>
                <Entypo name="plus" />
              </TouchableOpacity>
            </View>
            <View style={styles.noteInput}>
              <TextInput
                onChangeText={addNoteInput}
                              placeholder="Type a note"
                              value={enteredNote}
              ></TextInput>
            </View>

            <Text style={styles.viewAll}>View All</Text>
          </View>
        </View>

      </View>
    </>
  );
};

export default NoteInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'grey',
    padding: 20,
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
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },

  noteTitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
    left: 8,
  },
  taskTitle: {
    fontSize: 30,
    fontWeight: '300',
  },

  taskLists: {
    height: '230%',
      width: '100%',
      marginBottom: 20,
    //   backgroundColor: 'blue',
    top:20,
 
  },
  viewAll: {
    right: 10,
  },
  noteInput: {
    height: 40,
    width: '65%',
    //   backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 15,
    padding: 10,
  },
});
