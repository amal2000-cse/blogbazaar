// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1140a.firebaseapp.com",
  projectId: "mern-blog-1140a",
  storageBucket: "mern-blog-1140a.appspot.com",
  messagingSenderId: "481812338076",
  appId: "1:481812338076:web:3f0c2bc74732f489e2a459"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);