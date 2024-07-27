import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAXOlAz0ngBUnjLt3oDt5aetpfU2zfvjLc",
  authDomain: "thanhdao-3c5ff.firebaseapp.com",
  databaseURL:
    "https://thanhdao-3c5ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thanhdao-3c5ff",
  storageBucket: "thanhdao-3c5ff.appspot.com",
  messagingSenderId: "927313929250",
  appId: "1:927313929250:web:257378888adb3963cbd67b",
  measurementId: "G-1NR3V6F565",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
