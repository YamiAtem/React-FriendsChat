import React from 'react';
import "../App.css";

import firebase from 'firebase/app';
import 'firebase/auth';

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

function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;
