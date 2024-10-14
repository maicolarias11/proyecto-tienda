// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBL_F-HaFnaQWEwt4zQ2XPVsMqHKGYBB4",
  authDomain: "proyecto-tienda-fd633.firebaseapp.com",
  projectId: "proyecto-tienda-fd633",
  storageBucket: "proyecto-tienda-fd633.appspot.com",
  messagingSenderId: "1026740791286",
  appId: "1:1026740791286:web:40cc02124c970835a809d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

//Initialize DB
const db  = getFirestore(app)

export { auth, provider, signInWithPopup, signInWithEmailAndPassword, db}