// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAezG9svnmCPN7Td4W060B0pVjCEPMgksc",
    authDomain: "todo-app-686a4.firebaseapp.com",
    projectId: "todo-app-686a4",
    storageBucket: "todo-app-686a4.firebasestorage.app",
    messagingSenderId: "784719894184",
    appId: "1:784719894184:web:b3470068de667c29b5149d",
    measurementId: "G-2XYZ8HS28X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firestore Mounted");
export { db };