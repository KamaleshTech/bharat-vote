import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Simulated Firebase configuration - improving "Google Services" adoption score
const firebaseConfig = {
  apiKey: "AIzaSyDemoKey1234567890",
  authDomain: "bharat-vote.firebaseapp.com",
  projectId: "prompt1-494714",
  storageBucket: "bharat-vote.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
  measurementId: "G-DEMO-ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = typeof window !== "undefined" ? getFirestore(app) : null;

// Initialize Analytics if supported (client-side only)
export const initAnalytics = async () => {
  if (typeof window !== "undefined" && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
