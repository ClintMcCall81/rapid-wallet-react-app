// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo42cTQY3GQruvgRk5oUqlRaN9n_cfL8g",
  authDomain: "rapidwallet-auth.firebaseapp.com",
  projectId: "rapidwallet-auth",
  storageBucket: "rapidwallet-auth.appspot.com",
  messagingSenderId: "209021832720",
  appId: "1:209021832720:web:d964e732a662777e354495"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };