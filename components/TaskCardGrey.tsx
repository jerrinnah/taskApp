import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const TaskCardGrey = ({}) => {

  return (
    <View style={styles.container} >
      <View style={styles.Bcircle}>
        <Ionicons name="snow" color="black" size={15} />
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Decision</Text>
        <Text style={styles.taskText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quibusdam modi deleniti. Atque recusandae, laboriosam dignissimos fuga
        </Text>
      </View>
      <View style={[styles.Scircle, styles.right]}>
        <Ionicons name="chevron-forward-outline" color="black" size={15} />
      </View>
    </View>
  );
};

export default TaskCardGrey;

const styles = StyleSheet.create({
    container: {
      height: 215,
      width: 203,
      backgroundColor: "#E4E4E4" ,
      borderRadius: 30,
      padding: 20,
      margin: 5,
      top:20,
    },
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
    color: "black",
    fontSize: 12,
  },
  taskTitle: {
    fontSize: 20,
    color: "black",
    padding: 10,
  },
});
