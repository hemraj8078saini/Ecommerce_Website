
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKbAEy8fRlfZZlA4Tl9-XIcU48CihnSQM",
  authDomain: "ecommerce-69979.firebaseapp.com",
  projectId: "ecommerce-69979",
  storageBucket: "ecommerce-69979.appspot.com",
  messagingSenderId: "466981205078",
  appId: "1:466981205078:web:c8c1c7d9cf5dde5be777f7"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;