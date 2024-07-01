// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCt3bK1eERJpsmJrNNDsLNdlHP7fwbN1bQ",
    authDomain: "plutosmain-2e5d5.firebaseapp.com",
    projectId: "plutosmain-2e5d5",
    storageBucket: "plutosmain-2e5d5.appspot.com",
    messagingSenderId: "381021131691",
    appId: "1:381021131691:web:fbf1fabc9fb5046868f8ee",
    measurementId: "G-HPKW1B37V6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app);
console.log("Firestore initialized:", db);

export { db };
