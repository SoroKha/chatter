// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdjqWnMoPX3FIvB3QeheJX4O5IJJ-mthM",
  authDomain: "sorokha-chatter.firebaseapp.com",
  projectId: "sorokha-chatter",
  storageBucket: "sorokha-chatter.appspot.com",
  messagingSenderId: "624421935444",
  appId: "1:624421935444:web:0aaddb50d3ec84a2ef50c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);