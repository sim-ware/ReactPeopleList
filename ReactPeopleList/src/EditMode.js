import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';


class EditMode extends Component {
   render() {
      return (
             <View>
               <Text>Rating: {this.props.rating}</Text>
               <Button onPress={() => this.leaveEditMode()} title="cancel" />
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


export default EditMode;
