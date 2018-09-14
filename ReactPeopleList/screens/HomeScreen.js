import React from 'react';
import { Button, View, Text } from 'react-native';
import NameList from '../src/NameList';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <NameList />
      </View>
    );
  }
}
