import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnI55JjWo6QLFl_IH2rccTu86AZBuZBSM",
  authDomain: "listed3-979bf.firebaseapp.com",
  projectId: "listed3-979bf",
  storageBucket: "listed3-979bf.appspot.com",
  messagingSenderId: "642221601664",
  appId: "1:642221601664:web:8a07fa80006afd23068765",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export { provider };
