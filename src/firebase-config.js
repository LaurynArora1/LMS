// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOXX1JySkDDdDsVVNVlfS0841VrlZZHW4",
  authDomain: "react-crud-12f49.firebaseapp.com",
  projectId: "react-crud-12f49",
  storageBucket: "react-crud-12f49.appspot.com",
  messagingSenderId: "78804738796",
  appId: "1:78804738796:web:6ddd36c3e9d1c462f33bc9",
  measurementId: "G-PSGWPE12VZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
