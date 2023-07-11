import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const TaskCard = (props) => {

  return (
   <TouchableOpacity>
     <View
      style={{
        height:255,
        width: 203,
        backgroundColor: "black" ,
        borderRadius: 30,
        padding: 20,
        margin: 5,
      }}
    >
      <View style={styles.Bcircle}>
        <Ionicons name="snow" color="black" size={15} />
      </View>
     
        <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>{props.task}</Text>
        <Text style={styles.taskText}>
          Lorem is ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quibusdam modi deleniti. Atque recusandae, laboriosam dignissimos fuga
        </Text>
      </View>
      <View style={[styles.Scircle, styles.right]}>
        <Ionicons name="chevron-forward-outline" color="black" size={15} />
      </View>
    </View>
   </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
 
  Bcircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  Scircle: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
  right: {
    bottom: 20,
    left: 160,
  },
  taskContainer: {
    height: "70%",
    width: "95%",
    top: 7,
  },
  taskText: {
    color: "white",
    fontSize: 12,
  },
  taskTitle: {
    fontSize: 20,
    color: "white",
    padding: 10,
  },
});
