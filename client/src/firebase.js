// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

   apiKey : import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "journeyjot-d0395.firebaseapp.com",
  projectId: "journeyjot-d0395",
  storageBucket: "journeyjot-d0395.appspot.com",
  messagingSenderId: "851685098846",  
  appId: "1:851685098846:web:4b1d534d5c13e79423fbcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);