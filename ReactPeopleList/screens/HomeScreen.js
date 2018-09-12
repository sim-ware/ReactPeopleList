import React from 'react';
import { Button, View, Text } from 'react-native';
import NameList from '../NameList';
import ScrollViewExample from '../ListTest';

var myModule = require('../Firebase');
var data = myModule.data;

console.log(data)

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <NameList />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
