// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb2Ri0ldyUSTJYuBfkIxuvUCN1FM5XnFI",
  authDomain: "collapsify-c7162.firebaseapp.com",
  projectId: "collapsify-c7162",
  storageBucket: "collapsify-c7162.appspot.com",
  messagingSenderId: "662781209060",
  appId: "1:662781209060:web:233781352cc4ed228afff1",
  measurementId: "G-VPVD1N4WK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
