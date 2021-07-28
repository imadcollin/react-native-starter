/* eslint-disable */
import React from 'react';
import {SafeAreaView, View, Text, Pressable, Button} from 'react-native';
import ButtonStyles from './ButtonStyle';
const PressButton = () => {
  return (
    <SafeAreaView style={ButtonStyles.container}>
      <View>
        <Button title="Click" onPress={() => console.warn('button clicked')}>
          {' '}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default PressButton;
