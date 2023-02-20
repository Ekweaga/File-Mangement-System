// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVAkVI6JxMnWUN6V3x3tJcnI5JwndCjQo",
  authDomain: "file-management-system-86e82.firebaseapp.com",
  projectId: "file-management-system-86e82",
  storageBucket: "file-management-system-86e82.appspot.com",
  messagingSenderId: "1029066600324",
  appId: "1:1029066600324:web:f0cca0317491b7fb1977d1",
  measurementId: "G-9TPRM1TY2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);