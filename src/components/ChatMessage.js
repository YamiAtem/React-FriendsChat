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

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} id="pic"/>
                <p>{text}</p>
            </div>
        </>
    );
}

export default ChatMessage;
