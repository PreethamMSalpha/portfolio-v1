import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAHrsry8lnXF7TYZkDudG1cXeposxG9LSk",
  authDomain: "portfolio-contactdata.firebaseapp.com",
  databaseURL: "https://portfolio-contactdata.firebaseio.com",
  projectId: "portfolio-contactdata",
  storageBucket: "portfolio-contactdata.appspot.com",
  messagingSenderId: "431868168702",
  appId: "1:431868168702:web:2412cd1536a732649ad8af",
  measurementId: "G-VJNSG9S5RV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
