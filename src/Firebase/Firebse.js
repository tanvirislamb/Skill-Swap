// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFaTfdb5wSCwtth4ITkV_jfEtbDZ_k-MQ",
    authDomain: "skills-swap-8b56f.firebaseapp.com",
    projectId: "skills-swap-8b56f",
    storageBucket: "skills-swap-8b56f.firebasestorage.app",
    messagingSenderId: "304753655071",
    appId: "1:304753655071:web:b31a5014bb21647473842a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;