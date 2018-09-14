import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';


class RatingTab extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Text>{this.props.rating}</Text>
             </View>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      paddingHorizontal: 50,
      margin: 2,
   }
})


export default RatingTab;
