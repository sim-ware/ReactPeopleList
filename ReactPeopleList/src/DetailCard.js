import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import AgeTab from './AgeTab';
import RatingTab from './RatingTab';
import IDTab from './IDTab';
// import { withNavigation } from 'react-navigation';
var myModule = require('../Firebase');


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
   const name = String(this.props.name);
   console.log(name);
   //
   // db.collection('people').where("name", "==", String(this.props.name)).get().then(collection => {
   db.collection('people').where("name", "==", "Adam Apple").get().then(collection => {
     const name = collection.docs.map(doc => doc.data().name)
     const rating = collection.docs.map(doc => doc.data().rating)
     const birthday = collection.docs.map(doc => doc.data().birthday.seconds)
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
