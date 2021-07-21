/* eslint-disable */
import React from 'react';
import {View, Text, Pressable} from 'react-native';

const PressButton = () => {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.warn('button is pressed');
        }}>
        <Text> Press</Text>
      </Pressable>
    </View>
  );
};

export default PressButton;
