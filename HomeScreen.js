import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Button title="START" onPress={() => props.navigation.navigate('Question')} />
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
