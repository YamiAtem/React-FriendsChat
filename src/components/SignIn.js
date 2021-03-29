import React from 'react';
import '../App.css';

import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDJeXM8vrUsbWouls2qmXlKHkwsMwpNB4U",
    authDomain: "formdom-a2e7e.firebaseapp.com",
    databaseURL: "https://formdom-a2e7e.firebaseio.com",
    projectId: "formdom-a2e7e",
    storageBucket: "formdom-a2e7e.appspot.com",
    messagingSenderId: "263022664524",
    appId: "1:263022664524:web:7102e17aba2a411c908de9"
})

const auth = firebase.auth();

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}

export default SignIn;
