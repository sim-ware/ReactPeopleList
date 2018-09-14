import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
var myModule = require('../Firebase');


//
const db = myModule.db;

db.collection("people").where("name", "==", "Adam Apple")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log('2.')
            console.log(doc.id, " => ", doc.data());
        });
    })
//


class DetailCard extends Component {
   render() {
      return (
             <View style = {styles.item}>
                <Text>'Test'</Text>
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


export default withNavigation(DetailCard);
