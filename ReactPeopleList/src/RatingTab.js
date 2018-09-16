import React, { Component } from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';


class RatingTab extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Text>Rating: {this.props.rating}</Text>
                <Button
                  title="edit"
                />
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
      alignItems: 'center',
   }
})


export default RatingTab;
