// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyBS2S7jzuEl70dk3KkJxIdYScM-NiB7yqc",
    authDomain: "pc-constructor-7114a.firebaseapp.com",
    projectId: "pc-constructor-7114a",
    storageBucket: "pc-constructor-7114a.appspot.com",
    messagingSenderId: "1006527135568",
    appId: "1:1006527135568:web:16e0a3f5f993cd63e23655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;