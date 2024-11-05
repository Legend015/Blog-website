// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-9ba32.firebaseapp.com",
  projectId: "blog-website-9ba32",
  storageBucket: "blog-website-9ba32.firebasestorage.app",
  messagingSenderId: "327794124148",
  appId: "1:327794124148:web:ab9bf1445f876137ebb821"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);