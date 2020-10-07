import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQNzVoUXfTzFxoH88nXKwDU5aSNbZsSJM",
  authDomain: "clone-dd298.firebaseapp.com",
  databaseURL: "https://clone-dd298.firebaseio.com",
  projectId: "clone-dd298",
  storageBucket: "clone-dd298.appspot.com",
  messagingSenderId: "538351784764",
  appId: "1:538351784764:web:ff8488a15ece3990b44439",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
