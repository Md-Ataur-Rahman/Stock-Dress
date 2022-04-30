// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBWobnhbdeMdNpz7F9q5dTuHUMdhGgSn2Y",
  authDomain: "stock-dress.firebaseapp.com",
  projectId: "stock-dress",
  storageBucket: "stock-dress.appspot.com",
  messagingSenderId: "499739065911",
  appId: "1:499739065911:web:cc7bc80aa1bdb78f8409b2",
  measurementId: "G-M1XD8DLK4V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
