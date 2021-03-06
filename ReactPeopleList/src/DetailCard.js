import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import AgeTab from './AgeTab';
import RatingTab from './RatingTab';
import IDTab from './IDTab';
const myModule = require('../Firebase');


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
   let citiesRef = db.collection("people");
   name = name.replace(/['"]+/g, '');
   let query = citiesRef.where("name", "==", name);
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
               <Card title={String(this.state.name)}>
                <IDTab name={this.state.name} />
                <AgeTab birthday={this.state.birthday} />
                <RatingTab rating={this.state.rating} name={this.state.name} />
               </Card>
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
