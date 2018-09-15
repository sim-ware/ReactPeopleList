import React, { Component } from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';


class IDTab extends Component {
  constructor() {
    super();
    this.getFilePath = this.getFilePath.bind(this);
  }

  getFilePath(name) {
    if (typeof name !== 'undefined') {
      console.log('IDTab')
      console.log(name)
      name = String(this.props.name);
      console.log(name);
      name = name.replace(/['"]+/g, '');
      console.log(name)
      firstName = name.split(" ")[0].toLowerCase()
      console.log(firstName);
      firstName = '../imgs/' + firstName + '.jpg';
      console.log(typeof firstName);
      // https://stackoverflow.com/questions/33907218/react-native-use-variable-for-image-file
      return firstName
    }
    return name
   }

   render() {
      return (
             <View style = {styles.item}>
                <Image
                  source={require('../imgs/lucy.jpg')}
                />
                <Text>{this.getFilePath(this.props.name)}</Text>
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
// source={require('../imgs/lucy.jpg')}
// source={require(this.getFilePath(this.props.name))}
