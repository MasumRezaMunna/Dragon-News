// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiEw5xSCleVTIGFliTUZSJa1Ryn3h8Gt0",
  authDomain: "the-dragon-news-e836f.firebaseapp.com",
  projectId: "the-dragon-news-e836f",
  storageBucket: "the-dragon-news-e836f.firebasestorage.app",
  messagingSenderId: "274129999198",
  appId: "1:274129999198:web:926a8e87bcff4ec9fb2bcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;