import React, { Component } from 'react';
import { AppRegistry, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

// console.log('IN: App.js');

// var myModule = require('./Firebase');
// var data = myModule.data;

// console.log('Data:')
// console.log(data);

export default class FlatListBasics extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var myModule = require('./Firebase');
    var data = myModule.data;
    this.setState({ data });
  }

   // state = {
   //   names: [
   //      {'name': 'Ben', 'id': 1},
   //      {'name': 'Susan', 'id': 2},
   //      {'name': 'Robert', 'id': 3},
   //      {'name': 'Mary', 'id': 4},
   //      {'name': 'Daniel', 'id': 5},
   //      {'name': 'Laura', 'id': 6},
   //      {'name': 'John', 'id': 7},
   //      {'name': 'Debra', 'id': 8},
   //      {'name': 'Aron', 'id': 9},
   //      {'name': 'Ann', 'id': 10},
   //      {'name': 'Steve', 'id': 11},
   //      {'name': 'Olivia', 'id': 12}
   //   ]
   //    data: data
   // }

   render() {
     console.log('inside Render');
     console.log('Samir');
     console.log(this.state.data);
     console.log(this.state.data.length);
      return (
          <ScrollView>
             {
                this.state.data.map((name) => (
                   <View style = {styles.item}>
                      <Text>{item.name}</Text>
                   </View>
                ))
             }
          </ScrollView>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})
