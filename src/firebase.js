import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD17mrAMjdCemDZvNGONpqV9EQPajbJUM0",
    authDomain: "contact-ti.firebaseapp.com",
    projectId: "contact-ti",
    storageBucket: "contact-ti.firebasestorage.app",
    messagingSenderId: "677885779244",
    appId: "1:677885779244:web:99033293b69382844a2089"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
