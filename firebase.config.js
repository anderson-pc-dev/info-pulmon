// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnU_0ny9JyKQr02YzaEa2wdxkRjSSHKCI",
  authDomain: "info-pulmon.firebaseapp.com",
  projectId: "info-pulmon",
  storageBucket: "info-pulmon.firebasestorage.app",
  messagingSenderId: "268404203653",
  appId: "1:268404203653:web:3ae5c137bb98a0be5a89ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);