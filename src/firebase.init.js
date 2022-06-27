// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClce42PF0Rs_HfnUyp-0NuAUrins-3w1E",
    authDomain: "khuda-lagce.firebaseapp.com",
    projectId: "khuda-lagce",
    storageBucket: "khuda-lagce.appspot.com",
    messagingSenderId: "1097078546373",
    appId: "1:1097078546373:web:7e3ea52594e419e30a35ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;