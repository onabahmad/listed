import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtlLMlEfU5_xl5kUUww-LrT9EwLUKxhkg",
  authDomain: "listed-3b137.firebaseapp.com",
  projectId: "listed-3b137",
  storageBucket: "listed-3b137.appspot.com",
  messagingSenderId: "683644877181",
  appId: "1:683644877181:web:c5504f49d9e14e34623414",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export { provider };
