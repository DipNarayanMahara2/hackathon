import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn3byAHWuorTbVaR0-O6gMI0uXn0jhlfY",
  authDomain: "hackthondb.firebaseapp.com",
  projectId: "hackthondb",
  storageBucket: "hackthondb.firebasestorage.app",
  messagingSenderId: "127961049416",
  appId: "1:127961049416:web:353a23c100e96c74e92b7d",
  measurementId: "G-PPD4XRL3RE",
};

// Lazy initialization
let firebaseApp: FirebaseApp;
let db: Firestore;
let auth: Auth;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0]; // Use the already initialized app
}

db = getFirestore(firebaseApp);
auth = getAuth(firebaseApp);

export { firebaseApp, auth, db };
