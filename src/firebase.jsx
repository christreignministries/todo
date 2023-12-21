// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getFirestore } from "../node_modules/firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuGRlDsteSTHHGjvDlBB3hs2wTV6lYdDQ",
  authDomain: "auth-2104e.firebaseapp.com",
  projectId: "auth-2104e",
  storageBucket: "auth-2104e.appspot.com",
  messagingSenderId: "848017573582",
  appId: "1:848017573582:web:7ef843c198d2adc896329f",
  measurementId: "G-7DKZDPG21E",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export default firestore;
