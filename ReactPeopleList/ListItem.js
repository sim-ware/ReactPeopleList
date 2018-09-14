import React, { Component } from 'react';
import { Button, Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';


class ListItem extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Button
                  title={this.props.name}
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Details', {
                      itemId: 95,
                      otherParam: 'yo dog',
                    });
                  }}
                />
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
      backgroundColor: '#ffffff'
   }
})


export default withNavigation(ListItem);
// onPress={() => this.props.navigation.navigate('Details')}
