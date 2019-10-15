import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function OptionScreen(props) {
  const [values, setValues] = useState('');
  const [choices, setChoices] = useState(['']);

  const handleChangeText = name => (event, value) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  function addAnotherChoice() {
    // e.preventDefault();
    let choice = choices.concat(['']);
    setChoices(choice);
  }

  const renderChoices = () => {
    return choices.map((choice, i) => {
      return (
        <TextInput
          key={i}
          placeholder="Type your choice here..."
          style={{ height: 40, borderColor: 'gray', margin: 8, borderWidth: 1 }}
          onChangeText={handleChangeText(i)}
          value={choice}
        />
      );
    });
  };


  return (
    <View style={styles.container}>
      <View>
        {renderChoices()}
        <Button title="Add Another Choice" onPress={addAnotherChoice} />
      </View>
      <Button title="Decide" onPress={() => props.navigation.navigate('Decision')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
