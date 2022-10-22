import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputLine from '../components/molecules/InputLine';
import InputGroup from '../components/organisms/InputGroup';

const HomePage = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        {/* <Text style={styles.h1}>HomePage</Text> */}
      </View>

      {/* <InputGroup /> */}
      <View>
        <InputLine />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    backgroundColor: '#4E6C50',
    padding: 10,
    borderRadius: 14,
  },
  h1: {
    color: 'F0EBCE',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomePage;
