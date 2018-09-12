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

db.collection("people").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        data.push({key: doc.id, value: doc.data().name});
    });
    data = data.sort()
    console.log(data);
});

// console.log(data);

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
