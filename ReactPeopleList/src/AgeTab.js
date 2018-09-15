import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';


class AgeTab extends Component {
  constructor() {
    super();
    this.checkAge = this.checkAge.bind(this);
    this.getCountDown = this.getCountDown.bind(this);
  }

  checkAge(birthday) {
    if (typeof birthday !== 'undefined') {
      birthday = birthday[0];
      birthday = new Date(birthday);
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return birthday
  }

  getCountDown(birthday) {
    return birthday
  }

   render() {
      return (
             <View style = {styles.item}>
                <Text>'Age'</Text>
                <Text>{this.checkAge(this.props.birthday)}</Text>
                <Text>'Until Birthday'</Text>
                <Text>{this.getCountDown(this.props.birthday)}</Text>
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
