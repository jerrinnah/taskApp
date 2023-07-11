import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../components/misc/colors';
import { useState } from 'react';
import RoundIconBtn from '../components/misc/icons/RoundIconBtn';

const Welcome = ({navigation}) => {
  const [user, setUser] = useState('');
  const handleOnChangeText = (text: string) => setUser(text);
  // console.log(user)
  // const handleSubmit = () => {
 
  // }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome</Text>
     
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={user}
          onChangeText={handleOnChangeText}
          placeholder="Enter Name to continue:"
        />
        
        <TouchableOpacity style={styles.btn}>
        <RoundIconBtn
          iconName="arrow-right"
          color={colors.dark}
          style={undefined}
          onPress={() => navigation.navigate('Nav')}
          
        />
        </TouchableOpacity> 
      </View>
    </View>
  );
};

export default Welcome;

const width = Dimensions.get('window').width - 50;
// console.log(width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    alignSelf: 'flex-start',
    paddingLeft: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
    
  }, 
  input: {
    width,
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingLeft: 15,
  },
  icon: {
    height: 30,
    width: 30,
    backgroundColor: colors.dark,
    borderRadius: 15,
    padding: 5,
    position: 'absolute',
    right: 10,
  },
  btn: {
    position: 'absolute',
    right:10,
  },
});
