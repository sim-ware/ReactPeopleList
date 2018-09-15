import React, { Component } from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';


class IDTab extends Component {
  // constructor() {
  //   super();
  //   this.getFilePath = this.getFilePath.bind(this);
  // }
  //
  // getFilePath(name) {
  //   if (typeof name !== 'undefined') {
  //     birthday = birthday[0];
  //     birthday = new Date(birthday);
  //     var ageDifMs = Date.now() - birthday.getTime();
  //     var ageDate = new Date(ageDifMs);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   }
  //   return name
  //  }

   render() {
      return (
             <View style = {styles.item}>
                <Image
                  source={require('../imgs/lucy.jpg')}
                />
                <Text>{this.props.name}</Text>
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


export default IDTab;
