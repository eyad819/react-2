// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYBBi_Pc0Z1QKJoPQgKv1UsMR08aF8TPw",
  authDomain: "my-app-df98e.firebaseapp.com",
  projectId: "my-app-df98e",
  storageBucket: "my-app-df98e.appspot.com",
  messagingSenderId: "824028691839",
  appId: "1:824028691839:web:e3d72028c873c2bd74ee4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);