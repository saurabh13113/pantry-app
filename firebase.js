// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqT12XmL12PdH2UNu4lyRS0UUQesecN9k",
  authDomain: "inventory-management-bf4ef.firebaseapp.com",
  projectId: "inventory-management-bf4ef",
  storageBucket: "inventory-management-bf4ef.appspot.com",
  messagingSenderId: "620451388489",
  appId: "1:620451388489:web:bcbc3b4eceac24bf423398",
  measurementId: "G-27XS9W4QF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}