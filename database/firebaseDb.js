import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBd4IgoB1vF8Q8lULEkqdwCdUn2EXD7x1g",
  authDomain: "react-f3c0b.firebaseapp.com",
  projectId: "react-f3c0b",
  storageBucket: "react-f3c0b.appspot.com",
  messagingSenderId: "571263982041",
  appId: "1:571263982041:web:8782d39fe0ef93942021c8",
  measurementId: "G-49F12VNF47"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;