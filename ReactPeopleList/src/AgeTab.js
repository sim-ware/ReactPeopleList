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
      let ageDifMs = Date.now() - birthday.getTime();
      let ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return birthday
  }

  getCountDown(birthday) {
    let ans = birthday;
    ans = this.getDateDifference(birthday)
    if (ans < 0) {
      birthdayNew = '2018' + String(birthday).slice(4, 10)
      ans = this.getDateDifference(birthdayNew)
      if (ans < 0) {
        birthdayNew = '2019' + String(birthday).slice(4, 10)
        ans = this.getDateDifference(birthdayNew)
      }
    }
    let months = (Math.round(ans/31));
    let days = (String(birthday).substr(8,2));
    let res = parseInt(months) + ' months and ' + parseInt(days)
    return res
  }

  getDateDifference(birthday) {
    let startd = Date.parse(new Date(), "yyyy-MM-dd");
    let endd = Date.parse(birthday, "yyyy-MM-dd");
    let diff = new Date(endd - startd);
    let days = diff/1000/60/60/24;
    return days
  }

   render() {
      return (
             <View style = {styles.item}>
                <Text>{this.checkAge(this.props.birthday)} years old</Text>
                <Text>{this.getCountDown(this.props.birthday)} days until next birthday</Text>
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
