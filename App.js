import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './compnents/Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './compnents/Items/Item';
import PressButton from './compnents/PressButton/PressButton';

import data from './data';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [index, setIndex] = useState(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
    <SafeAreaView style={backgroundStyle}>
      <Header></Header>

      <PressButton
        type="yellow"
        content="SomeData"
        callback={() => {
          console.warn('smeData');
        }}></PressButton>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Main">Hello World fromsss App.js!</Section>
        </View>
      </ScrollView>
      <FlatList
        data={data}
        renderItem={x => <Item info={x.item}></Item>}
        keyExtractor={item => item.id}></FlatList>
      {/* <Item info={data[1]}></Item> */}
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
