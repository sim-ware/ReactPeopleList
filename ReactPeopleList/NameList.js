import React, { Component } from 'react';
import { AppRegistry, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';


export default class NameList extends Component {
   render() {
      return (
          <ScrollView>
             {
                this.props.data
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
