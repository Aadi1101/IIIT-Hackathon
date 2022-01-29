import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmxHH1dEo2C8zzlG8UEuX773oLcqrQi1U",
  authDomain: "restaurant-59fa7.firebaseapp.com",
  projectId: "restaurant-59fa7",
  storageBucket: "restaurant-59fa7.appspot.com",
  messagingSenderId: "1019001179349",
  appId: "1:1019001179349:web:ea67b0dde845184f0ba65c",
  measurementId: "G-29NZBM0XKG"
};


const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;

