import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk2e6yloLfZkYZZTlTZESrmVhe2CmGGn8",
  authDomain: "listed2-b78a3.firebaseapp.com",
  projectId: "listed2-b78a3",
  storageBucket: "listed2-b78a3.appspot.com",
  messagingSenderId: "278891260596",
  appId: "1:278891260596:web:ecc3edefa1e61b133985e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export { provider };
