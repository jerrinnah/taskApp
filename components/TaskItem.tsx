import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const TaskItem = (props) => {
  return (
    <TouchableOpacity onPress={props.deleteTaskHandler} style={styles.mapView}>
      <View>
        <Text style={styles.taskText}>{props.text} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
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
