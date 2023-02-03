// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuxXgOaagbiHroHvnuXampRlsRHO0PQ0s",
  authDomain: "fir-tutorial-4cc04.firebaseapp.com",
  projectId: "fir-tutorial-4cc04",
  storageBucket: "fir-tutorial-4cc04.appspot.com",
  messagingSenderId: "246504824517",
  appId: "1:246504824517:web:048c595121e5df207c1aac",
};

//! Initialize Firebase
const app = initializeApp(firebaseConfig);

//! Accessing the database and performing CRUD operations
export const database = getFirestore(app);
export const usersCollectionReference = collection(database, "persons");

//! Authentication using Email and password services
export const auth = getAuth(app);
