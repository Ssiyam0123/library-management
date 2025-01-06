// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDkxzUaFMDYGmdnw5X-TD0BRf7qtsGRwLo",
  authDomain: "a-11-2c77e.firebaseapp.com",
  projectId: "a-11-2c77e",
  storageBucket: "a-11-2c77e.firebasestorage.app",
  messagingSenderId: "872977174970",
  appId: "1:872977174970:web:afb9f58b7c3b21cfe50d83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);