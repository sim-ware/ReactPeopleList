import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';


class AgeTab extends Component {

  getAge(age) {
    console.log(age);
    var date = new Date(time);
    console.log(date.toString)
  }

   render() {
      return (
             <View style = {styles.item}>
                <Text>{this.props.birthday}</Text>
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


export default AgeTab;
