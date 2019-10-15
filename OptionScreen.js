import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function OptionScreen(props) {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState('');
  const choices = [];

  function handleChangeText(text) {
    setValue(text);
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your choice here..."
        style={{ height: 40, borderColor: 'gray', margin: 8, borderWidth: 1, flex: 1 }}
        onChangeText={text => handleChangeText(text)}
        value={value}
      />
      <Button title="Add Another Choice" />
      <Button title="Decide" onPress={() => props.navigation.navigate('Decision')} />
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
