import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';


class EditButton extends Component {
   render() {
      return (
             <View>
               <Text>Rating: {this.props.rating}</Text>
               <Button onPress={() => this.enterEditMode()} title="edit" />
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   },
   butoon: {
      color:'black'
   }
})


export default EditButton;
