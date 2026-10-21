
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-d5c72.firebaseapp.com",
  projectId: "fir-d5c72",
  storageBucket: "fir-d5c72.firebasestorage.app",
  messagingSenderId: "566296986662",
  appId: "1:566296986662:web:b637971e751eef186152e7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}