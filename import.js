// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeCIE8nKF1bfP6zLj2aY2nHFI8Rt7GAfA",
  authDomain: "loginauthintern.firebaseapp.com",
  projectId: "loginauthintern",
  storageBucket: "loginauthintern.appspot.com",
  messagingSenderId: "818246703556",
  appId: "1:818246703556:web:5afb497808dc6161582c91",
  measurementId: "G-4EFBJPSNTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);