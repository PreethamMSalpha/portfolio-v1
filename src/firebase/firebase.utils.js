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

// var messagesRef = firebase.database().ref("messages");

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   //Get value
//   var name = getInputVal('name');
//   var company = getInputVal('company');
//   var email = getInputVal('email');
//   var phone = getInputVal('phone');
//   var message = getInputVal('message');

//   // Save message
//   saveMessage(name, company, email, phone, message);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company: company,
//     email: email,
//     phone: phone,
//     message: message
//   });
// }
