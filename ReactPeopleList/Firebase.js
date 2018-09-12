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

console.log('IN: Firebase.js');

const data = []

db.collection("people").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        data.push(doc.data().name);
    });
    data = data.sort()
    console.log(data);
});

// export data;
exports.data = data;

// var config = {
//     apiKey: "AIzaSyBjPYBiDN6nMmXDExQ2fPKg7k92npODy9c",
//     authDomain: "reactpeoplelist.firebaseapp.com",
//     databaseURL: "https://reactpeoplelist.firebaseio.com",
//     projectId: "reactpeoplelist",
//     storageBucket: "reactpeoplelist.appspot.com",
//     messagingSenderId: "992090732552"
//   };
