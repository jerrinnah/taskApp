import { StyleSheet, Text, View } from 'react-native'
import {  NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import Welcome from './screens/Welcome'
import Home from './screens/Home';
import Feed from './screens/Feed';
import Nav from './screens/Nav';



const Stack = createNativeStackNavigator();

const App = () => {

 
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='Nav' component={Nav} options={{headerShown:false}}/>
        <Stack.Screen name='Feed' component={Feed} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})