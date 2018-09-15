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
    // birthday needs to be converted to '10-01' format; MM-DD
    // console.log(String(birthday).substr(5,2));
    // console.log(String(birthday).substr(8,2));
    // birthday = String(birthday).substr(5,2) + '-' + String(birthday).substr(8,2)
    // var t1 = new Date();
    // var t2 = new Date(t1.getFullYear() + '-' + birthday);
    // var dif = t1.getTime() - t2.getTime();
    // var Seconds_from_T1_to_T2 = dif / 1000;
    // var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    // console.log(Seconds_Between_Dates/60/60/24);
    // console.log(Seconds_Between_Dates.getMonth());
    // return countDown
    return birthday

  }

  getSecondsTillDate(date) {
    var t1 = new Date();
    var t2 = new Date(t1.getFullYear() + '-' + date);
    var dif = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    return Seconds_Between_Dates;
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
