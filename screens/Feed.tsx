import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListList from "../components/ListList";

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text>August 12 2022</Text>
          <Text style={styles.today}>Today</Text>
        </View>
        <View style={styles.avi}></View>
      </View>

      <View style={styles.feed}>
        <Text style={styles.feedText}>Feed</Text>
        <View style={styles.feedTab}>
          <View style={styles.tabTitle}>
            <Text style={styles.meetingTitle}>Meeting</Text>
            <Text style={styles.meetingTime}>3:25 PM</Text>
          </View>
          <Text style={[styles.colorWhite, styles.desc]}>
            Discuss team tasks for the day
          </Text>
          <View style={styles.userContainer}>
            <View style={styles.user}></View>
            <View style={styles.userX}></View>
            <View style={styles.userXX}></View>
          </View>
        </View>

        <View style={styles.listContainer}>
          <ScrollView style={styles.scroll}>
          <ListList />
          <ListList />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "flex-start",
  },
  colorWhite: {
    color: "white",
  },

  today: {
    fontSize: 30,
    fontWeight: "500",
  },
  topRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 50,
    paddingTop:10,
  },
  avi: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "grey",
  },
  feed: {
    height: "50%",
    width: "100%",
    top: 20,
    // backgroundColor:"blue",
    alignItems:'center'
  },
  feedTab: {
    height: "70%",
    width: "90%",
    backgroundColor: "black",
    borderRadius: 20,
  },
  feedText: {
    // justifyContent:'flex-start',
    right:120,
    fontSize: 30,
    bottom: 20,
  },
  meetingTitle: {
    color: "white",
    fontSize: 30,
    left: 20,
    // top:20,
  },
  meetingTime: {
    fontSize: 12,
    color: "white",
  },
  tabTitle: {
    height: 50,
    width: "93%",
    margin: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  desc: {
    width: 150,
    left: 20,
    // padding:10,
  },
  user: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "grey",
  },
  userX: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "grey",
    right: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  userXX: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "grey",
    right: 40,
    borderWidth: 2,
    borderColor: "black",
  },
  userContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  listContainer: {
    height: "70%",
    width: "100%",
    // backgroundColor: "red",
    marginBottom:50,
  },
  scroll:{
    height:'80%',
    width:'100%',
    // backgroundColor:'grey',
    top:20,
    paddingBottom:90,
    bottom:90,
   
  }
});
