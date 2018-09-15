import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import AgeTab from './AgeTab';
import RatingTab from './RatingTab';
import IDTab from './IDTab';
// import { withNavigation } from 'react-navigation';
const myModule = require('../Firebase');

// var admin = require("firebase-admin");
// var db = firebaseAdmin.database();
// var ref = db.ref("people");


class DetailCard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rating: 0
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
   const db = myModule.db;
   let name = String(this.props.name);
   console.log(name);
   //
   // Create a reference to the cities collection
   var citiesRef = db.collection("people");

   // Create a query against the collection.
   name = name.replace(/['"]+/g, '');
   console.log(name);
   var query = citiesRef.where("name", "==", name);
   console.log(query);
   // DYNAMIC: "\"Harry Hands\""
   // HARD-CODED: "Adam Apple"
   //
   // db.collection('people').where("name", "==", name).get().then(collection => {
   db.collection('people').where("name", "==", name).get().then(collection => {
     const name = collection.docs.map(doc => doc.data().name)
     const rating = collection.docs.map(doc => doc.data().rating)
     const birthday = collection.docs.map(doc => doc.data().birthday)
     this.setState({ name });
     this.setState({ rating });
     this.setState({ birthday });
   });
   }
   render() {
      return (
             <View style = {styles.item}>
                <IDTab name={this.state.name} />
                <AgeTab birthday={this.state.birthday} />
                <RatingTab rating={this.state.rating} />
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


export default DetailCard;
