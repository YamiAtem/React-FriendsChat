import React, { useRef, useState } from 'react';
import "./App.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import SignIn from "./components/SignIn";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDJeXM8vrUsbWouls2qmXlKHkwsMwpNB4U",
    authDomain: "formdom-a2e7e.firebaseapp.com",
    databaseURL: "https://formdom-a2e7e.firebaseio.com",
    projectId: "formdom-a2e7e",
    storageBucket: "formdom-a2e7e.appspot.com",
    messagingSenderId: "263022664524",
    appId: "1:263022664524:web:7102e17aba2a411c908de9"
  });
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        {/*<SignOut />*/}
      </header>
      <section>
        <SignIn />
      </section>
    </div>
  );
}

export default App;
