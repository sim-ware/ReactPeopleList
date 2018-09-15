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
               <View style = {styles.border}>
                  <Image style = {styles.image}
                    source={Images[this.getFilePath(this.props.name)]}
                  />
                </View>
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
      width: 145,
      height: 145,
      borderRadius: 75,
   },
   border: {
      borderRadius:80,
      borderColor: 'grey',
      borderWidth: 3,
   }
})


export default IDTab;
