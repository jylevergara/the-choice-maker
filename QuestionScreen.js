import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function QuestionScreen(props) {
  const [value, setValue] = useState('');

  function handleChangeText(text) {
    setValue(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your question here..."
        style={{ height: 40, borderColor: 'gray', margin: 8, borderWidth: 1, flex: 1 }}
        onChangeText={text => handleChangeText(text)}
        value={value}
      />
      <Button title="Done" onPress={() => props.navigation.navigate('Option')} />
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
