const firebase = require("firebase-admin");
const firebaseConfig = {
  apiKey: "AIzaSyC61gMSkQoGSWkZvk0cOAy1e9w0iYuJnEg",
  // authDomain: "salat-api.firebaseapp.com",
  databaseURL: "https://salat-api.firebaseio.com",
  projectId: "salat-api"
  // storageBucket: "salat-api.appspot.com",
  // messagingSenderId: "118727588611",
  // appId: "1:118727588611:web:15e80ff76173a848098736"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
module.exports = firebase.database();
