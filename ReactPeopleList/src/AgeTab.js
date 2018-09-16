import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';


class AgeTab extends Component {
  constructor() {
    super();
    this.checkAge = this.checkAge.bind(this);
    this.getCountDown = this.getCountDown.bind(this);
    this.getDateDifference = this.getDateDifference.bind(this);
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
    var ans = birthday;
    ans = this.getDateDifference(birthday)
    // console.log(ans)
    if (ans < 0) {
      // console.log(String(birthday).slice(4, 10));
      birthdayNew = '2018' + String(birthday).slice(4, 10)
      ans = this.getDateDifference(birthdayNew)
      // console.log(ans);
      if (ans < 0) {
        // console.log(String(birthday).slice(4, 10));
        birthdayNew = '2019' + String(birthday).slice(4, 10)
        ans = this.getDateDifference(birthdayNew)
        // console.log(ans);
      }
    }
    // console.log(String(birthday).slice(4, 10));
    return parseInt(ans)
  }

  getDateDifference(birthday) {
    var startd = Date.parse(new Date(), "yyyy-MM-dd");
    var endd = Date.parse(birthday, "yyyy-MM-dd");
    var diff = new Date(endd - startd);
    var days = diff/1000/60/60/24;
    return days
  }

   render() {
      return (
             <View style = {styles.item}>
                <Text>{this.checkAge(this.props.birthday)} years old</Text>
                <Text>{this.getCountDown(this.props.birthday)} until next birthday</Text>
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


export default AgeTab;
