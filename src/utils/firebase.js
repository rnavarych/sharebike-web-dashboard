import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm8CLZIQWcPZjgByy1PqZYUYGf2NdgDmc",
  authDomain: "sharebike-prod.firebaseapp.com",
  databaseURL: "https://sharebike-prod.firebaseio.com",
  projectId: "sharebike-prod",
  storageBucket: "sharebike-prod.appspot.com",
  messagingSenderId: "652232163503",
  appId: "1:652232163503:web:f67a532f5cbb53e0c4945a",
  measurementId: "G-QEHL0YK1DB"
};

export function firebaseInitializeApp() {
  firebase.initializeApp(firebaseConfig);
}

export function signOut() {
  firebase.auth().signOut();
}

export function registerUser(email, password) {
  return  firebase.auth().createUserWithEmailAndPassword(this.state.login, this.state.password)
}

export function login(email, password) {
  return  firebase.auth().signInWithEmailAndPassword(email, password)
}

export function userChangeListener(listener) {
  firebase.auth().onAuthStateChanged(listener)
}