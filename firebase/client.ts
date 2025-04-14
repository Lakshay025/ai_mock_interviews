import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdSM0nSCrD_KCiQ4AQtf6UgPyMkv9B6oo",
  authDomain: "prepwise-5232d.firebaseapp.com",
  projectId: "prepwise-5232d",
  storageBucket: "prepwise-5232d.firebasestorage.app",
  messagingSenderId: "78300683418",
  appId: "1:78300683418:web:91fc1411519a571c6b5323",
  measurementId: "G-H091NXNFGQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);