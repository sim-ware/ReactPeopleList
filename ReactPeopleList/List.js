import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Adam Apple'},
            {key: 'Billy Bunter'},
            {key: 'Charlie Cheddar'},
            {key: 'David Donut'},
            {key: 'Eddy Eagle'},
            {key: 'Freddie Flintoff'},
            {key: 'George Graham'},
            {key: 'Henry Horse'},
            {key: 'Ian Italy'},
            {key: 'James Jeep'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// export default FlatListBasics;
