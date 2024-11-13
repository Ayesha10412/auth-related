// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBrWeI2tCJ48Ax6Po2fpG2CFNQnAp_9DQ",
  authDomain: "auth-related-f9eb2.firebaseapp.com",
  projectId: "auth-related-f9eb2",
  storageBucket: "auth-related-f9eb2.firebasestorage.app",
  messagingSenderId: "139766436961",
  appId: "1:139766436961:web:2dacc6b4bb5a1f2f784620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
