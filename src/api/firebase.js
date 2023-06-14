// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js'

// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'
import { getDatabase, set, ref, update, onValue } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeq6uO6-T8XKreIKZUSb1JcHLZEgLM7Ws",
  authDomain: "lawan-project-id-620fe.firebaseapp.com",
  databaseURL: "https://lawan-project-id-620fe-default-rtdb.firebaseio.com",
  projectId: "lawan-project-id-620fe",
  storageBucket: "lawan-project-id-620fe.appspot.com",
  messagingSenderId: "381958231080",
  appId: "1:381958231080:web:711ecfa7132c59523f911d",
  measurementId: "G-EX1Y3V71ZJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);


