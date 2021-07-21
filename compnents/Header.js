/* eslint-disable */
import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/1.jpg')}
        style={styles.img}></ImageBackground>
      <Text style={styles.text}>Header Compnent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});
export default Header;
