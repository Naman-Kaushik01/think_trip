// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGo8eOG23k5lnee8V-ZwblVfSk4gMBmqQ",
  authDomain: "think-trip.firebaseapp.com",
  projectId: "think-trip",
  storageBucket: "think-trip.firebasestorage.app",
  messagingSenderId: "242707323192",
  appId: "1:242707323192:web:6c787afda19f9d9086c9cd",
  measurementId: "G-E2W23SV6D1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
