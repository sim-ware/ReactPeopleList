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
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}
