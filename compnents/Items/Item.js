/* eslint-disable */
import React from 'react';
import {View, Text} from 'react-native';
import ItemStyles from './ItemStyle';
const Item = ({info}) => {
  const {id, name, text} = info;
  return (
    <View style={ItemStyles.container}>
      <Text style={ItemStyles.title}> Hello from Item</Text>
      <Text style={ItemStyles.title}> id: {id}</Text>
      <Text style={ItemStyles.title}> - text -> {text}</Text>
    </View>
  );
};

export default Item;
