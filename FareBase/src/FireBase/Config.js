
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const Config = {
  apiKey: "AIzaSyCvLtjTj4vstbxgGYOJDLKlkqVvWAQZYy0",
  authDomain: "msapp-f4968.firebaseapp.com",
  projectId: "msapp-f4968",
  storageBucket: "msapp-f4968.appspot.com",
  messagingSenderId: "634805240656",
  appId: "1:634805240656:web:0d573921f8b5363880a255",
  measurementId: "G-C2P6JJXZH5"
};


firebase.initializeApp(Config);

export const Firestore = firebase.firestore();


export default firebase;