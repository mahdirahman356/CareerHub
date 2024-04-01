// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYRb8t3KbOd9MyC5u-2dwXAPxuvlPIx20",
  authDomain: "career-hub-project-9fc3a.firebaseapp.com",
  projectId: "career-hub-project-9fc3a",
  storageBucket: "career-hub-project-9fc3a.appspot.com",
  messagingSenderId: "393709864737",
  appId: "1:393709864737:web:659e9f3909c499d92fe060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

