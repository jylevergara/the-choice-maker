import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DecisionScreen from './DecisionScreen';
import HomeScreen from './HomeScreen';
import OptionScreen from './OptionScreen';
import QuestionScreen from './QuestionScreen';

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Question: QuestionScreen,
    Option: OptionScreen,
    Decision: DecisionScreen,
  },
  {
    initialRouteName: 'Home',
  });

const App = createAppContainer(MainNavigator);

export default App;
