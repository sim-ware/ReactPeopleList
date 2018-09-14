import React, { Component } from 'react';
import { Button, Text, Image, View, StyleSheet, ScrollView } from 'react-native';


class ListItem extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Button
                  title={this.props.name}
                  onPress={() => this.props.navigation.navigate('Details')}
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


export default ListItem;
// onPress={() => this.props.navigation.navigate('Details')}
