// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK2VTPbLBUKCXFj3zWdWexxeiPA52368Y",
  authDomain: "bookstack-1df37.firebaseapp.com",
  projectId: "bookstack-1df37",
  storageBucket: "bookstack-1df37.appspot.com",
  messagingSenderId: "158052345666",
  appId: "1:158052345666:web:dfc405ccb6289507df4adb",
  measurementId: "G-XV3KWZ4R6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
