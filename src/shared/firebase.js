import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6r_Ywwm8GT7VbsvxFgbrwOMGzdN-SXew",
  authDomain: "image-community-6ccae.firebaseapp.com",
  projectId: "image-community-6ccae",
  storageBucket: "image-community-6ccae.appspot.com",
  messagingSenderId: "310840538744",
  appId: "1:310840538744:web:66c6b58069a986b95f5f8d",
  measurementId: "G-DCWLRW0E83"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
export{auth, apiKey, firestore, storage, realtime};