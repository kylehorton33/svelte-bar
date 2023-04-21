// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration saved in git-ignored file
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export db, storage for use in other parts of the app
export const db = getFirestore(app);
export const storage = getStorage(app);