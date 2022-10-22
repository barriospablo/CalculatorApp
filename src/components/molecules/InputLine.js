import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const InputLine = () => {
  return (
    <View style={styles.row}>
      <TextInput style={styles.square} placeholder="Elemento" />
      <TextInput style={styles.square} />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
    flexDirection: 'row',
  },
  square: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputLine;
