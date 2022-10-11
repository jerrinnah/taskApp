import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";


const TaskListItem = ({ taskList }) => {


  const [check, setCheck] = useState(false);

  return (
    <View style={styles.singleTask}>
      <CheckBox 
      size={12} 
      checkedColor="black" 
      checked={check} 
      onPress={()=>{
        setCheck(!check)
      }}/>
      <Text>{taskList}</Text>
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  singleTask: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOpacity: 0.1,
    alignItems: "center",
    flexDirection: "row",
  },
});
