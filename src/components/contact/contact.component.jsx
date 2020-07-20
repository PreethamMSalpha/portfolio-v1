import React, { useState } from "react";

import "./contact.styles.scss";

import firebase from "firebase/app";
import "firebase/firestore";

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

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    const uid = new Date().getTime().toString();

    if (name === "" || email === "" || message === "") {
      alert("All fields are mandatory");
    } else {
      db.collection("contact")
        .doc(uid)
        .set({
          name: name,
          email: email,
          message: message,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      setName("");
      setEmail("");
      setMessage("");
      alert("Your response is sent");
      props.history.push("/");
    }
  }

  return (
    <div className="contact-form">
      <h1>Contact</h1>
      <p>
        Feel free to email me via{" "}
        <a href="mailto:preethamalphams@outlook.com">
          preethamalphams@outlook.com
        </a>
      </p>
      <p>Or fill in the contact form down below</p>
      <form id="contactForm">
        <div className="contact">
          <p>Full Name:</p>
          <input
            type="text"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <p>Email:</p>
          <input
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <p>Message:</p>
          <textarea
            type="text"
            rows="8"
            required
            onChange={(event) => setMessage(event.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
