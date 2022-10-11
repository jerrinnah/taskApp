import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import colors from '../colors';

const RoundIconBtn = ({ iconName, size, color, style, onPress }) => {
  return (
    <Entypo
      name={iconName}
      size={size || 24}
      color={color || colors.error}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: colors.error,
    // borderRadius: 15,
    // paddingBottom: 20,
    // position: 'absolute',
    //     right: 20,

  },
});
