// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3JZi-hOE-x-ervrFPtFgF0IO2SAOe05o",
  authDomain: "auth-integration-9b08e.firebaseapp.com",
  projectId: "auth-integration-9b08e",
  storageBucket: "auth-integration-9b08e.firebasestorage.app",
  messagingSenderId: "591880134257",
  appId: "1:591880134257:web:2c1be6cbc57855fd5845d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);