import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewExample extends Component {
   state = {
      names: [
         'Ben',
         'Susan',
         'Robert',
         'Mary',
         'Daniel',
         'Laura',
         'John',
         'Debra',
         'Aron',
         'Ann',
         'Steve',
         'Olivia',
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View style = {styles.item}>
                        <Text>{item}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   item: {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // padding: 30,
      // fontSize: 30,
      // backgroundSize: 'auto',
      paddingHorizontal: 50,
      margin: 2,
      // borderColor: '#2a4944',
      // borderWidth: 1,
      backgroundColor: '#ffffff'
   }
})
