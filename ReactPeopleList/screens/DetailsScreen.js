import React from 'react';
import { View, Text } from 'react-native';
import DetailCard from '../src/DetailCard'
//
// console.log(data);
// <Text>itemId: {JSON.stringify(itemId)}</Text>
// <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail View',
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <DetailCard name={otherParam}/>
      </View>
    );
  }
}
