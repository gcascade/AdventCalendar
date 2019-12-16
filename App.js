import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Day from './Components/Day';

export default function App() {
  return (
    <View style={styles.container}>
      <Day day={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
