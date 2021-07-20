/* eslint-disable */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header Compnent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default Header;
