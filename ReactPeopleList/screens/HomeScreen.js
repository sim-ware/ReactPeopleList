import React from 'react';
import { Button, View, Text } from 'react-native';
import FlatListBasics from '../List';
import ScrollViewExample from '../ListTest';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'People',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatListBasics />
        <ScrollViewExample />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
