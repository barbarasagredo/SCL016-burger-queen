import firebase from "firebase/app";
import "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAFW5kEL9PjrgXRUmDFq9n7ODf8GQRhLrY",
    authDomain: "queen-v.firebaseapp.com",
    projectId: "queen-v",
    storageBucket: "queen-v.appspot.com",
    messagingSenderId: "845046866404",
    appId: "1:845046866404:web:3cb8262e04b6b96ad3e7f1"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();