import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Header from './src/componants/Headers/Header';
import Item from './src/componants/Items/Item';

import data from './src/constants/data';
import AppStyles from './AppStyle';
const App = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    console.log(index);
    if (data.length < index) {
      alert('No Elements!');
    }

    if (!_isEmpty() && data.length > index + 1) {
      setIndex(index + 1);
      return data[index];
    }
    alert('Last Elements!');
  };

  const back = () => {
    console.log(index);

    if (!_isEmpty() && index != 0) {
      setIndex(index - 1);
      return data[index - 1];
    }
    alert('First Element!');
  };
  const _isEmpty = () => {
    return data.length < 0;
  };

  return (
    <SafeAreaView style={AppStyles.container}>
      <Header></Header>

      <ScrollView>
        <View style={AppStyles.view}>
          <Text>Hello World fromsss App.js!</Text>
        </View>
      </ScrollView>
      <FlatList
        data={data}
        renderItem={x => <Item info={x.item}></Item>}
        keyExtractor={item => item.id}></FlatList>
      <Button color="grey" title="bext" onPress={next}>
        next
      </Button>
      <Button title="prev" onPress={back}>
        {' '}
        prev
      </Button>
      <Item info={data[index]}></Item>
    </SafeAreaView>
  );
};
export default App;
