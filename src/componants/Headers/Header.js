/* eslint-disable */
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import HeaderStyle from './HeaderStyle';
const Header = () => {
  return (
    <View style={HeaderStyle.container}>
      <ImageBackground
        source={require('./../../../assets/images/1.jpg')}
        style={HeaderStyle.img}></ImageBackground>
      <Text style={HeaderStyle.text}>Header Compnent</Text>
    </View>
  );
};
export default Header;
