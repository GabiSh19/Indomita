import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyATdh4BSLZIpPkFuxoNTtZxpq-EjhMcuwc",
    authDomain: "indomitaexpeditions.firebaseapp.com",
    projectId: "indomitaexpeditions",
    storageBucket: "indomitaexpeditions.appspot.com",
    messagingSenderId: "846073127675",
    appId: "1:846073127675:web:7fd6f54df3769a2fe4865e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firebase auth
const auth = getAuth()
const db = getFirestore(app);

export {
    app, auth, db
};









