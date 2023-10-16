// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCudP1ljmm4LfMNEGGrrtM_1kTNScOjrDQ",
  authDomain: "my-portfolio-2d525.firebaseapp.com",
  projectId: "my-portfolio-2d525",
  storageBucket: "my-portfolio-2d525.appspot.com",
  messagingSenderId: "501042016363",
  appId: "1:501042016363:web:524cc8ea2899ea8213012e",
  measurementId: "G-RDNNE4PNDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);