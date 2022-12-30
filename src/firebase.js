
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcYw5E4JkfMCg6J2v4izQVcDAokv_McSM",
  authDomain: "chat-test-52e85.firebaseapp.com",
  projectId: "chat-test-52e85",
  storageBucket: "chat-test-52e85.appspot.com",
  messagingSenderId: "106102080488",
  appId: "1:106102080488:web:b390c2ae6f7faf2c15da5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();