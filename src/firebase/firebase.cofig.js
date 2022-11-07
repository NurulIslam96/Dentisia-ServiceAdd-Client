// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT9zeao4i8Ac2z3Ud7DdgbbvzXYAvhHtk",
  authDomain: "dentisia-client-side.firebaseapp.com",
  projectId: "dentisia-client-side",
  storageBucket: "dentisia-client-side.appspot.com",
  messagingSenderId: "561630055650",
  appId: "1:561630055650:web:e1ea096a2daaffbec7a2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;