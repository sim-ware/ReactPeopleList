import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//################################################################################
//# FIREBASE EXPERIMENT
//################################################################################
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyBjPYBiDN6nMmXDExQ2fPKg7k92npODy9c",
  authDomain: "reactpeoplelist.firebaseapp.com",
  projectId: "reactpeoplelist"
});

var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

console.log('WHERE DOES THIS SHOW UP?');

var data = []

db.collection("people").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        data.push(doc.data().name);
    });
    data = data.sort()
    console.log(data);
});

// console.log(data);

// TODO: RETURN LIST OF NAMES, NOT GROUP OF DB OBJECTS

// var config = {
//     apiKey: "AIzaSyBjPYBiDN6nMmXDExQ2fPKg7k92npODy9c",
//     authDomain: "reactpeoplelist.firebaseapp.com",
//     databaseURL: "https://reactpeoplelist.firebaseio.com",
//     projectId: "reactpeoplelist",
//     storageBucket: "reactpeoplelist.appspot.com",
//     messagingSenderId: "992090732552"
//   };
//################################################################################
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
