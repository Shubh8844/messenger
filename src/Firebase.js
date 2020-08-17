import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDC7uW50BIgBKm6qqzChiRbx0cA1_ge21U",
    authDomain: "messenger-fea65.firebaseapp.com",
    databaseURL: "https://messenger-fea65.firebaseio.com",
    projectId: "messenger-fea65",
    storageBucket: "messenger-fea65.appspot.com",
    messagingSenderId: "228435573034",
    appId: "1:228435573034:web:83a2fb2229d1626eb1c653",
    measurementId: "G-7RLBJ7Z9CH"
  
});

const db=firebaseApp.firestore();
export default db;


