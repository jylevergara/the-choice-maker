import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { ChoiceItem } from './atoms/ChoiceItem';

export default function OptionScreen(props) {
  const [values, setValues] = useState('');
  const [choices, setChoices] = useState(['']);

  const handleEditChoice = (index, value) => {
    const newChoices = choices.map((choice, i) => i === index ? value : choice);
    setChoices(newChoices);
  };

  function addAnotherChoice() {
    // e.preventDefault();
    let choice = choices.concat(['']);
    setChoices(choice);
  }

  const renderChoices = () => {
    return choices.map((choice, i) => {
      return (
        <ChoiceItem key={i} index={i} choice={choice} onChange={handleEditChoice} />
      );
    });
  };

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  function onChangeText() {
    setValues(values);
  }

  return (
    <View style={styles.container}>
      <View>
        {/*{renderChoices()}*/}
        <TextInput
          // id={`choice${index}`}
          placeholder="Type your choice here..."
          style={{ height: 40, borderColor: 'gray', margin: 8, borderWidth: 1 }}
          onChangeText={option => onChangeText(option)}
          value={value}
        />
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
