// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA02JTe8-Vkw8ngE2-fX_WUqvBKjJMgLOA",
  authDomain: "pantry-track-3091e.firebaseapp.com",
  projectId: "pantry-track-3091e",
  storageBucket: "pantry-track-3091e.appspot.com",
  messagingSenderId: "1025453937718",
  appId: "1:1025453937718:web:e065f4c62f297cf18e7497",
  measurementId: "G-Y9TN7G1VTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}