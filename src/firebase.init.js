// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
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
console.log(firebaseConfig.apiKey);
console.log(firebaseConfig.authDomain);
console.log(firebaseConfig.projectId);
console.log(firebaseConfig.storageBucket);
console.log(firebaseConfig.messagingSenderId);
console.log(firebaseConfig.appId);
console.log(firebaseConfig.measurementId);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
