import React, { useRef, useState } from 'react';
import "../App.css";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from './ChatMessage';

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

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Welcome! Say Something Nice!" />
                <button type="submit" disabled={!formValue}>🕊️</button>
            </form>
        </>
    );
}

export default ChatRoom;
