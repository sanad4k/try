// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0rhZfYLcaWzYtf4HUnJYaAXFuSlYlkL0",
  authDomain: "d-cart-7ce5a.firebaseapp.com",
  projectId: "d-cart-7ce5a",
  storageBucket: "d-cart-7ce5a.firebasestorage.app",
  messagingSenderId: "861822431468",
  appId: "1:861822431468:web:5d1e464c717996e419f5c9",
  measurementId: "G-1KYBZ9W90D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);