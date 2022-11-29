
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVDGcBt5_U9I4QSbJ3MTsizeGqPWxgGQA",
  authDomain: "clone-68bd5.firebaseapp.com",
  projectId: "clone-68bd5",
  storageBucket: "clone-68bd5.appspot.com",
  messagingSenderId: "258288842602",
  appId: "1:258288842602:web:d6045309e804c0a4ed9713",
  measurementId: "G-CJHCP9NGX2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
