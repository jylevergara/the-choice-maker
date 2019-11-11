import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

ChoiceItem.propTypes = {
  choice: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export function ChoiceItem(props) {
  const { index, choice } = props;

  const handleChange = (index) => (event) => {
    props.onChange(index, event.target.value);
  };

  return (
    <TextInput
      id={`choice${index}`}
      placeholder="Type your choice here..."
      style={{ height: 40, borderColor: 'gray', margin: 8, borderWidth: 1 }}
      onChangeText={handleChange(index)}
      value={choice}
    />
  );
}

const styles = StyleSheet.create({});
