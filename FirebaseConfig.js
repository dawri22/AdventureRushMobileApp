
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcmNMk-xVg54BI66-c0njFbVKkoX74aKw",
  authDomain: "adventuremobileapp-d5675.firebaseapp.com",
  projectId: "adventuremobileapp-d5675",
  storageBucket: "adventuremobileapp-d5675.appspot.com",
  messagingSenderId: "723395456157",
  appId: "1:723395456157:web:aff62f1f763109f4d9f874"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);


