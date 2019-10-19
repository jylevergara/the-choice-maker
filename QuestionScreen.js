import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, ScrollView } from 'react-native';

export default function QuestionScreen(props) {
  const [value, setValue] = useState('');

  function handleChangeText(text) {
    setValue(text);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
      >
        {/*<View style={{ height: 40 }}>*/}
        {/*<TextInput*/}
        {/*placeholder="Type your question here..."*/}
        {/*style={{ height: 48, borderColor: 'gray', margin: 8, borderWidth: 1, flex: 1 }}*/}
        {/*onChangeText={text => handleChangeText(text)}*/}
        {/*value={value}*/}
        {/*/>*/}
        {/*</View>*/}
        <View>
          <Button title="Use Default Answers" onPress={() => props.navigation.navigate('UseEightBall')} />
          <Button title="I want to use my own options" onPress={() => props.navigation.navigate('Option')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
