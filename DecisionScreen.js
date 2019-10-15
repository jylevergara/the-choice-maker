import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DecisionScreen() {
  const [value, setValue] = useState('');

  function handleChangeText(text) {
    setValue(text);
  }

  return (
    <View style={styles.container}>
      <Text>Decision!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
