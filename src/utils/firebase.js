// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNXNMkbJ9Uhs9zbMOSHV1JEbIvRpxWMLM",
  authDomain: "myprotfolio-001.firebaseapp.com",
  projectId: "myprotfolio-001",
  storageBucket: "myprotfolio-001.appspot.com",
  messagingSenderId: "557586392535",
  appId: "1:557586392535:web:b6968f8b89708717099792",
  measurementId: "G-KTDGB5EMG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);