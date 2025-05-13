// firebaseConfig.js
import { initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVeJaTQo7hg84tVGvuVlA_E6oyfH44gaM",
  authDomain: "react-native-e688f.firebaseapp.com",
  projectId: "react-native-e688f",
  storageBucket: "react-native-e688f.appspot.com",
  messagingSenderId: "416161084970",
  appId: "1:416161084970:web:f28db2c2e0fcb073ac7553",
  measurementId: "G-K7BVTNHVCJ"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
