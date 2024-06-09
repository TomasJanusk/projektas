import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFUzB26xYpC735MLaYNhnNc7uxnldiNxU",
    authDomain: "musudatabaseprojektas.firebaseapp.com",
    databaseURL: "https://musudatabaseprojektas-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "musudatabaseprojektas",
    storageBucket: "musudatabaseprojektas.appspot.com",
    messagingSenderId: "996181232561",
    appId: "1:996181232561:web:a722c10aaefaabb864cb90"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);



export { app, database, auth,createUserWithEmailAndPassword, ref, set};
