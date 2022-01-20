import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsyUgm5aYH7TL0uRwMXmW3CaavRMnVseo",
  authDomain: "work4you-dc48d.firebaseapp.com",
  projectId: "work4you-dc48d",
  storageBucket: "work4you-dc48d.appspot.com",
  messagingSenderId: "463975437589",
  appId: "1:463975437589:web:106cedd6203ba84e26051c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
