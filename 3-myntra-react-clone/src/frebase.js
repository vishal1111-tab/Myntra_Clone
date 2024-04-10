
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRWnrcyFQtb2Kv7-o1QYuSfMM6z3-0QK0",
  authDomain: "myntra-4f112.firebaseapp.com",
  projectId: "myntra-4f112",
  storageBucket: "myntra-4f112.appspot.com",
  messagingSenderId: "320212813717",
  appId: "1:320212813717:web:1fe425f4ff9bcbd1ff989c",
  measurementId: "G-E149T8MK50"
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();