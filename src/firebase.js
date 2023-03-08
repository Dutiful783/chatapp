import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEmxfJd9Y4TJmFvGfzZfZwfkwHlYBrt3I",
  authDomain: "chatapp-6ce24.firebaseapp.com",
  databaseURL: "https://chatapp-6ce24-default-rtdb.firebaseio.com",
  projectId: "chatapp-6ce24",
  storageBucket: "chatapp-6ce24.appspot.com",
  messagingSenderId: "669207824848",
  appId: "1:669207824848:web:315ea8b6303f4aca7211d5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
