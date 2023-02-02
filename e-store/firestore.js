// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyBGpwPzozPrfEZ59monGvf6sjoHPnolcCU",
//   authDomain: "e-store-b9e79.firebaseapp.com",
//   projectId: "e-store-b9e79",
//   storageBucket: "e-store-b9e79.appspot.com",
//   messagingSenderId: "461476428648",
//   appId: "1:461476428648:web:9379cf1a33a71ca44234dd",
//   measurementId: "G-R9SWYT4Q6V",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDvA4ogKpulTkcw2QW_b2r2q-UuTzEBmys",
//   authDomain: "e-store-b0c81.firebaseapp.com",
//   projectId: "e-store-b0c81",
//   storageBucket: "e-store-b0c81.appspot.com",
//   messagingSenderId: "386732351883",
//   appId: "1:386732351883:web:75f9c7cf196a948b6c4f8e",
//   measurementId: "G-2VS7E04NEJ",
// };

//e store three
const firebaseConfig = {
  apiKey: "AIzaSyAov941k4ejb4fbgV5ZCpafsyTkCV9GFoo",
  authDomain: "e-store-three.firebaseapp.com",
  projectId: "e-store-three",
  storageBucket: "e-store-three.appspot.com",
  messagingSenderId: "496863778689",
  appId: "1:496863778689:web:989536d82c78c4cb557a80",
  measurementId: "G-4K0TLWNBM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
