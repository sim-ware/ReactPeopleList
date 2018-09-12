import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

//################################################################################
//# FIREBASE CODE
//################################################################################
console.log('IN: App.js');

var myModule = require('./Firebase');
var data = myModule.data;

console.log('Data:')
console.log(data);

//################################################################################

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
