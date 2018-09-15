import React, { Component } from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';
import Images from '../imgs/Index';

class IDTab extends Component {
  constructor() {
    super();
    this.state = {
      img:''
    };
    this.getFilePath = this.getFilePath.bind(this);
  }

  getFilePath(name) {
    if (typeof name !== 'undefined') {
      name = String(this.props.name);
      let key = name.substr(0,1).toLowerCase().charCodeAt(0) - 97;
      return key
    }
    return name
   }

   render() {
      return (
             <View style = {styles.item}>
                <Image style = {styles.image}
                  source={Images[this.getFilePath(this.props.name)]}
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
   },
   image: {
      // flex: 1,
      width: 150,
      height: 150,
      borderRadius: 75,
      // resizeMode: 'contain'
   }
})


export default IDTab;
