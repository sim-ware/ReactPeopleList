import React, { Component } from 'react';
import { Button, AppRegistry, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem'

var myModule = require('./Firebase');
var db = myModule.db;

console.log('NameList.js')

var data = []

db.collection("people").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        data.push(doc.data().name);
    });
    // // // // // // //
    console.log('1.');
    console.log(data);
    // // // // // // //
});

// const test_data_names = ["Adam Apple", "Billy Bunter", "Charlie Chaplin","David Donut","Eddy Eagle","Freddie Flintoff","George Graham","Harry Hands","Ian Italy","Jane Joseph","Kevin Keegan", "Adam Apple", "Billy Bunter", "Charlie Chaplin","David Donut","Eddy Eagle","Freddie Flintoff","George Graham","Harry Hands","Ian Italy","Jane Joseph","Kevin Keegan"]
console.log('2.');
console.log(data);

// <NameList data={test_data_names} />

export default class NameList extends Component {
   render() {
      return (
          <FlatList
            data={data}
            renderItem={({item}) => <ListItem name={item} />}
          />
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

// keyExtractor={(item, index) => index}
