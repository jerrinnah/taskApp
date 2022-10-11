import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListList = () => {
  return (
    <View style={styles.listHolder}>
      <View style={styles.listTitle}>
        <Text style={styles.listHeader}>Design Header</Text>
        <Text>9:00 AM</Text>
      </View>
      <Text style={styles.description}>
      Create  header and modules for the project in view. Plan deployment
      </Text>
    </View>
  )
}

export default ListList

const styles = StyleSheet.create({
    listHolder:{
        justifyContent:'center',
        // backgroundColor:'blue',
        paddingLeft:5,
        paddingRight:5,
        marginBottom:20,
    },

    listHeader:{
        fontSize: 20,
        fontWeight:'bold',
       
    },
   
    listTitle:{
        width:'100%',
        height:'40%',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
    },
    description:{
        width:'80%',
        paddingLeft:20,
        paddingRight:20,
        // paddingBottom:100,
    },
   
})