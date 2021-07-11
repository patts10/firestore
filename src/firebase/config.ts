import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDsV72Ba77TvX-oHZGinP3Lc7GDZpHuIrI",
  authDomain: "sql-demos-eeccd.firebaseapp.com",
  databaseURL: "https://sql-demos-eeccd-default-rtdb.firebaseio.com",
  projectId: "sql-demos-eeccd",
  storageBucket: "sql-demos-eeccd.appspot.com",
  messagingSenderId: "874188847409",
  appId: "1:874188847409:web:0214b0bea0864443615810",
  measurementId: "G-PMDZL7G2WN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('hecho');

export default firebase.firestore();
