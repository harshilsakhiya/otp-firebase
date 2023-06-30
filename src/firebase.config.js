import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase project configuration
  apiKey: "AIzaSyCfu8u_pDZk7HBd6W4pLu1ZjL4aMrSL_0k",
  authDomain: "vehical-evolution.firebaseapp.com",
  projectId: "vehical-evolution",
  storageBucket: "vehical-evolution.appspot.com",
  messagingSenderId: "507203358394",
  appId: "1:507203358394:web:7934ebcbbd18a1b7d73c83",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
