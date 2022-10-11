import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Home from './Home';
import Feed from './Feed';
import AddTask from './AddTask';

const Tab = createBottomTabNavigator();

const Nav = () => {

    return (
    
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false
        }}
        >
        <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{headerShown:false,
            tabBarLabel: "Home",
            tabBarIcon: ({focused}) => {
                
                return <View style={{justifyContent:'center',alignItems:'center', opacity: focused ? 1 : 0.2 }}>
                    <Ionicons name='home-sharp' size={25}/>
                    <Text style={{fontSize:10,}}>Home</Text>
                </View>;
            }
        
        }}
        
        />
        <Tab.Screen 
        name='AddTask' 
        component={AddTask} 
        options={{headerShown:false,
            tabBarLabel: "add-circle",
            tabBarIcon: ({focused}) => {
                
                return <View style={{justifyContent:'center',alignItems:'center', opacity: focused ? 1 : 0.2 }}>
                    <Ionicons name='add-circle' size={25}/>
                    <Text style={{fontSize:10,}}>Add Task</Text>
                </View>;
            }
        
        }}
        
        />
        <Tab.Screen name='Feed' 
        component={Feed} 
        options={{
            headerShown:false,
            tabBarLabel:'Lists',
            tabBarIcon: ({focused})=>{
                return (
                    <View style={{justifyContent:'center',alignItems:'center', opacity: focused ? 1 : 0.2}}>
                        <Ionicons name='list-circle-sharp' size={25}/>
                        <Text style={{fontSize:10,}}>Lists</Text>
                    </View>
                )
            }

        }}/>
    </Tab.Navigator>
)
}

export default Nav

const styles = StyleSheet.create({})