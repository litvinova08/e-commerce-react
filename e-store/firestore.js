// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDly0VYKSICe3_NYP8lSmwxuba-CfOjIg",
  authDomain: "e-store-7ce38.firebaseapp.com",
  projectId: "e-store-7ce38",
  storageBucket: "e-store-7ce38.appspot.com",
  messagingSenderId: "1089308337019",
  appId: "1:1089308337019:web:6af3c15b9beb8b941253de",
  measurementId: "G-5JHZYGM1FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);